// alert("JavaScript works!");
// Github https://github.com/g38015/sdi_project4
// Peter Hitchcock
// SDI 1304
// April 29, 2013
// Project 4

// Librarys

// String Library

var stringLibrary = function () {

		// Function 1
		// Does a string follow a 123-456-7890 pattern like a phone number?
		var stringPhone = function (val) {

				var strLen = val.length;

				for(var i=0; i <= strLen; i++) {
						if (val.substring(i, i+1) === "-") {
								return i;

						}

				}


		};

		// Function 2
		// Does a string follow an aaa@bbb.ccc pattern like an email address?
		var stringEmail = function (val) {

				var strLen = val.length;

				for(var i=0; i <= strLen; i++) {
						if (val.substring(i, i+1) === "@") {
								return i;
						}

				}
				


		};

		// Function 3
		// Is the string a URL? (Does it start with http: or https:?).
		var stringUrl = function (val) {
				var url = val;
				if (url.substring(0,7) == "http://" || url.substring(0,8) == "https://") {
						return true;

				}

				


		};

/*
// Function 4
// Title-case a string (split into words, then uppercase the first letter of each word).
var stringTitle = function (stringTitle) {
		var split = stringTitle

};

// Function 5
// Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
var stringSeparator = function () {


};
*/
			return {
							"stringPhone": stringPhone,
							"stringEmail": stringEmail,
							"stringUrl": stringUrl



			};

};


// Number Library

var numberLibrary = function () {

			// Function 6
			// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10.
			var numDecimal = function (val) {
					decimalPlaces = val.toFixed(3);
					return decimalPlaces;


			};
/*
// Function 7
// Fuzzy-match a number: is the number above or below a number within a certain percent?
var numFuzzy = function () {


};

// Function 8
// Find the number of hours or days difference between two dates.
var numDates = function () {


};
*/
		// Function 9
		// Given a string version of a number such as "42", return the value as an actual Number, such as 42.
		var parseString = function (val) {
				pString = val;
				return parseInt(pString);


			


		};

			return {
						//	"numDecimal": numDecimal
							"numDecimal": numDecimal,
							"parseString": parseString

			}

};

/*
// Array Library

var arrayLibrary = fucntion () {
	
/*
// Function 10
// Find the smallest value in an array that is greater than a given number.
var arrValue = function () {


};

// Function 11
// Find the total value of just the numbers in an array, even if some of the items are not numbers.
var arrTotal = function () {


};

// Function 12
// Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
var arrSorted = function () {


};

}:
*/

// String Library
var sLib = stringLibrary();
var phoneString = "123-4567";
console.log("Dash is" + sLib.stringPhone(phoneString));
var emailString = "test@test.com";
console.log("email is" + sLib.stringEmail(emailString));
var url = "http//www.test.com";
console.log("Url is " + sLib.stringUrl(url));
// Number Libraray
var nLib = numberLibrary();
var moveDecimal = 3.1;
console.log("Moved to " + nLib.numDecimal(moveDecimal));
var parseTest = "34";
console.log("Return Number" + nLib.parseString(parseTest));
//var aLib = arrayLibrary();
