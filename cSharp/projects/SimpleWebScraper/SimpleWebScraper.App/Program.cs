using System;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using SimpleWebScraper.Builders;
using SimpleWebScraper.Data;
using SimpleWebScraper.Workers;

namespace SimpleWebScraper.App {
        class Program 
        {
            private const string Method = "search";

            static void Main (string[] args) 
            {

                    try 
                    {
                        Console.WriteLine ("Enter which city you would like scrape information from");
                        var craigslistCity = Console.ReadLine () ?? string.Empty;

                        System.Console.WriteLine ("Please enter the Craiglist category you would like to scrape");
                        var craiglistCategoryName = Console.ReadLine () ?? string.Empty;

                        // url address to download 
                        string urlAddress = $"http://{craigslistCity.Replace(" ", string.Empty)}.craiglist.org/{Method}/{craiglistCategoryName}";

                        // System.Console.WriteLine (urlAddress);

                        using (WebClient client = new WebClient ()) {
                            // Download the page
                            string content = client.DownloadString (urlAddress);

                            // System.Console.WriteLine (content);

        /*
            <a href="https://boston.craigslist.org/nos/cto/d/2001-ford-350-xlt/6570954158.html" data-id="6570954158" class="result-title hdrlnk">2001 Ford F 350 XLT</a>
            */

                            // Create the search criteria
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

                            // Start scraping
                            Scraper scraper = new Scraper();
                            var scrapedElements = scraper.Scrape(scrapeCriteria);

                            if (scrapedElements.Any())
                            {
                                foreach (var scrapedElement in scrapedElements)
                                {
                                    System.Console.WriteLine(scrapedElement);
                                }
                            }
                            else 
                            {
                                System.Console.WriteLine("There were no matches for the specified scrape criteria ");
                            }
                    
                        }
                    }
                    catch (Exception ex)
                    {
                
                        System.Console.WriteLine (ex.Message);
                    }

            }
    }
}