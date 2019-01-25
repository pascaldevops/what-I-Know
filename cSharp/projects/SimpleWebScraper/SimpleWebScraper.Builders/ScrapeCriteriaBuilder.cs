using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using SimpleWebScraper.Data;

namespace SimpleWebScraper.Builders {
    public class ScrapeCriteriaBuilder {
        private string _data;
        private string _regex;
        private RegexOptions _regexOptions;
        public List<ScrapeCriteriaPart> _parts;

        public ScrapeCriteriaBuilder () {
            setDefaults ();
        }

        private void setDefaults () {
            _data = string.Empty;
            _regex = string.Empty;
            _regexOptions = RegexOptions.None;
            _parts = new List<ScrapeCriteriaPart> ();
        }

        public ScrapeCriteriaBuilder WithData (string data) {
            _data = data;
            return this;
        }

        public ScrapeCriteriaBuilder WithRegex (string regex) {
            _regex = regex;
            return this;
        }

        public ScrapeCriteriaBuilder WithRegexOption (RegexOptions regexOptions) {
            _regexOptions = regexOptions;
            return this;
        }

        public ScrapeCriteriaBuilder WithPart (ScrapeCriteriaPart scrapeCriteriaPart) {
            _parts.Add (scrapeCriteriaPart);
            return this;
        }

        public ScrapeCriteria Build () {
            ScrapeCriteria scrapeCriteria = new ScrapeCriteria ();
            scrapeCriteria.Data = _data;
            scrapeCriteria.Regex = _regex;
            scrapeCriteria.RegexOption = _regexOptions;
            scrapeCriteria.Parts = _parts;
            return scrapeCriteria;
        }

    }
}