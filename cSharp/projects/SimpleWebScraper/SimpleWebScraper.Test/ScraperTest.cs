using System;
using System.Text.RegularExpressions;
using SimpleWebScraper.Builders;
using SimpleWebScraper.Data;
using SimpleWebScraper.Workers;
using Xunit;

namespace SimpleWebScraper.Test {
        public class ScraperTest {
            private readonly Scraper _scraper = new Scraper ();

            [Fact]
            public void FindCollectionWithNoParts () 
            {
                var content = "<a href=\"https://boston.craigslist.org/nos/cto/d/2001-ford-350-xlt/6570954158.html\" data-id=\"6570954158\" class=\"result-title hdrlnk\">2001 Ford F 350 XLT</a> SOME TEXT";

                ScrapeCriteria scrapeCriteria = new ScrapeCriteriaBuilder ()
                    .WithData (content) // The content of the entire pade that we download
                    .WithRegex(@"<a href=\""(.*?)\"" data-id=\""(.*?)\"" class=\""result-title hdrlnk\"">(.*?)</a>") 
                    .WithRegexOption (RegexOptions.ExplicitCapture)
                    .Build();
                    
                var foundElements =  _scraper.Scrape(scrapeCriteria);

                // One element is found
                Assert.True(foundElements.Count == 1);

                // The element found is indeed equal to content
                Assert.True(foundElements[0] == content);
            }

            [Fact]
            public void FindCollectionWithTwoParts () 
            {
                var content = "<a href=\"https://boston.craigslist.org/nos/cto/d/2001-ford-350-xlt/6570954158.html\" data-id=\"6570954158\" class=\"result-title hdrlnk\">2001 Ford F 350 XLT</a>";

                ScrapeCriteria scrapeCriteria = new ScrapeCriteriaBuilder ()
                    .WithData (content) // The content of the entire pade that we download
                    .WithRegex(@"<a href=\""(.*?)\"" data-id=\""(.*?)\"" class=\""result-title hdrlnk\"">(.*?)</a>") 
                    .WithRegexOption (RegexOptions.ExplicitCapture)
                    .WithPart (new ScrapeCriteriaPartBuilder ()
                        .WithRegex (@">(.*?)</a>")
                        .WithRegexOption (RegexOptions.Singleline)
                        .Build ())
                    .WithPart (new ScrapeCriteriaPartBuilder ()
                        .WithRegex (@"href=\""(.*?)\""")
                        .WithRegexOption(RegexOptions.Singleline)
                        .Build())
                    .Build();

                var foundElements =  _scraper.Scrape(scrapeCriteria);

                // One element is found
                Assert.True(foundElements.Count == 2);
                Assert.True(foundElements[0] == "2001 Ford F 350 XLT");                
                Assert.True(foundElements[1] == "https://boston.craigslist.org/nos/cto/d/2001-ford-350-xlt/6570954158.html");
                // The element found is indeed equal to content
                // Assert.True(foundElements[0] == content);
        }
    }
}