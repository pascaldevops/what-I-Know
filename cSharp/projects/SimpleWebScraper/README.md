**ScrapeCriteria** 
- Tells us how to scrape the page
- Tells us how granular we want to go within the scraping

**ScrapeCriteriaPart** 
- How granular we want to go with our search
- We are grabbing an HTML element and then we want to be able to dig further into it

**Scraper**
- It is doing the scraping

https://boston.craigslist.org/search/cta

.WithRegex(@"<a href=\""(.*?)\"" data-id=\""(.*?)\"" class=\"" result-title hdrlnk\"">(.*?)</a>") 

<a href="https://boston.craigslist.org/nos/cto/d/2001-ford-350-xlt/6570954158.html" data-id="6570954158" class="result-title hdrlnk">2001 Ford F 350 XLT</a>

https://regex101.com/r/Sw3SzF/1