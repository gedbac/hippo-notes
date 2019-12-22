/*
 *  Hippo Notes
 *
 *  Copyright (C) 2016 - 2020 The Hippo Notes Authors
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

export default class WhitespaceTextAnalyzer {

  constructor() {}

  analyze(value) {
    var terms = [];
    if (value) {
      if (typeof value === "string") {
        this._analyzeText(value, terms);
      } else if (value instanceof Array) {
        this._analyzeArray(value, terms);
      }
    }
    return terms;
  }

  _analyzeText(text, terms) {
    if (text) {
      var substrings = text.split(" ");
      if (substrings && substrings.length > 0) {
        for (var substring of substrings) {
          if (!terms.includes(substring)) {
            terms.push(substring.toLowerCase());
          }
        }
      }
    }
  }

  _analyzeArray(array, terms) {
    if (array) {
      for (var value of array) {
        if (typeof value === "string") {
          this._analyzeText(value, terms);
        }
      }
    }
  }

}