using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace SimpleWebScraper.Data 
{
    public class ScrapeCriteria 
    {
        public ScrapeCriteria () 
        {
            Parts = new List<ScrapeCriteriaPart> ();
        }

        public string Data { get; set; } // The data we want scrape
        public string Regex { get; set; } // Regex is how we want to scrape the data 
        public RegexOptions RegexOption { get; set; } // RegexOptions These are specific things about how our Regex needs to behave
        public List<ScrapeCriteriaPart> Parts { get; set; } // ScrapeCriteriaPart How granular we want to go with our search
    }
}