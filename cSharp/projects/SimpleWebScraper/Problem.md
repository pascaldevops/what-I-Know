### Wordscambler project
**Acceptance Criteria**
As a user I would like to be able to scrape links and their associated descrition from Craigslist's category amd city that I specify.

**Be creative**


**Understanding the problem**
- Basically we have two input: a city and a category
- We are getting a list of items based on the city and category
- From that list I'm getting the descrition and the associated links from the page.
- For example scraping the page I;m getting:
    - description: Selling item for cheap
    - Associated link: /example/58099808.html

**Needs to know**
- I need to learn how to download content from craiglist site
- Once I have the content:
  - How do I go over the HTML document, parse out and collect the data that I need? 
  - To parse the HTML doc we need look for a pattern.  

**The Algorithm Walkthrough**
- Ask the user for input: city and category
    CraiglistCity = ask user for input
    CraiglistCategory = ask user for input

- We are making sure the user enters something
    if CraiglistCity and CraiglistCategory are valid 
    then download the specified craiglist listing contents 

- We have the content. Now what do we need from it? We need to grab all the ocurrences of a specific HTML element like so (example grab all href elements on the page):
    grab a specified HTML element based on regular expression

- Now we have a list of all href elements. Go through that list of HTML elements and retains only the ones that have the stuff we need:
    for each matched HTML element in matched HTML elements

- We have no need to go deeper in that element:
    if no specified HTML parts than

- Now Add the matched HTML element to the scraped list 
    add matched HTML element to scraped items list

- Now go over each HTML item and grab that parts we need
    for each HTML part in the specified html part
      grab specified HTML part from matched HTML element based on regular expression

- Grab the match part and add it to the scraped item list
    if match found then add matched HTML part to the scraped items list

- Display warning if anything goes wrong
    otherwise show warning

**Final Algorithm**

CraiglistCity = ask user for input
CraiglistCategory = ask user for input in matched HTML 

  if CraiglistCity and CraiglistCategory are valid 
    then download the specified craiglist listing contents 
      grab a specified HTML element based on regular expression
        for each matched HTML element in matched HTML elements
          if no specified HTML parts than
            add matched HTML element to scraped items list
          otherwise
            for each HTML part in the specified html part
              grab specified HTML part from matched HTML element based on regular expression
              if match found then add matched HTML part to the scraped items list
  otherwise show warning
if scraped item list is not empty then display scraped HTML elements/parts 
otherwise show no macthes




**Expected output**

| Input                     | Output                          | 
| ------------------------: | :-----------------------------: | 
| Enter city and category   | Selling item for cheap          | 
|                           | /example/58099808.html          | 
|                           | Selling another item for cheap  | 
|                           | /example/58077808.html          | 
|                           |                                 |

**Algorithm**