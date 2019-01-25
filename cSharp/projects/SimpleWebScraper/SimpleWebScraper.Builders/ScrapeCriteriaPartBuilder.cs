using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using SimpleWebScraper.Data;

namespace SimpleWebScraper.Builders 
{
    public class ScrapeCriteriaPartBuilder 
    {
        private string _regex;
        private RegexOptions _regexOption;

        public ScrapeCriteriaPartBuilder() 
        {
            setDefaults();
        }

    private void setDefaults()
    {
      _regex = string.Empty;
      _regexOption = RegexOptions.None;
    }

    public ScrapeCriteriaPartBuilder WithRegex (string regex)
    {
        _regex = regex;
        return this;
    }
    
    public ScrapeCriteriaPartBuilder WithRegexOption (RegexOptions regexOption)
    {
        _regexOption = regexOption;
        return this;
    }

    public ScrapeCriteriaPart Build ()
    {
        ScrapeCriteriaPart scrapeCriteriaPart = new ScrapeCriteriaPart();
        scrapeCriteriaPart.Regex = _regex;
        scrapeCriteriaPart.RegexOption = _regexOption;
        return scrapeCriteriaPart;
    }
  }
}