// alert("JavaScript works!");
// Github https://github.com/g38015/sdi_project4
// Peter Hitchcock
// SDI 1304
// April 29, 2013
// Project 4

// Javascript Library

// String Library

var stringLibrary = function () {

		// Function 1
		// Does a string follow a 123-456-7890 pattern like a phone number?
		var stringPhone = function (arg) {

				var strLen = arg.length;

				for(var i=0; i <= strLen; i++) {
						if (arg.substring(i, i+1) === "-") {
								return i;

						}

				}

		};

		// Function 2
		// Does a string follow an aaa@bbb.ccc pattern like an email address?
		var stringEmail = function (arg) {

				var strLen = arg.length;

				for(var i=0; i <= strLen; i++) {
						if (arg.substring(i, i+1) === "@") {
								return i;
						}

				}
				
		};

		// Function 3
		// Is the string a URL? (Does it start with http: or https:?).
		var stringUrl = function (arg) {
				var url = arg;
				if (url.substring(0,7) === "http://" || url.substring(0,8) === "https://") {
							
							return true;
				
				} else {

							return false;
				}

		};

			return {

							"stringPhone": stringPhone,
							"stringEmail": stringEmail,
							"stringUrl": stringUrl

			}

};

// Number Library

var numberLibrary = function () {

			// Function 6
			// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10.
			var numDecimal = function (arg, decimal) {
					var decimalPlaces = arg.toFixed(decimal);
					return decimalPlaces;

			};

		// Function 9
		// Given a string version of a number such as "42", return the value as an actual Number, such as 42.
		var parseString = function (arg) {
				var pString = parseInt(arg);
				if (isNaN(pString)) {

						return false;

				} else {

						return pString;
				}
				
		};


			return {

							"numDecimal": numDecimal,
							"parseString": parseString
			}

};

// Array Library

var arrayLibrary = function () {
	
		// Function 10
		// Find the smallest value in an array that is greater than a given number.
		var arrValue = function (arg, arrayArg) {
					var numArg = arg;
					var sArray = arrayArg;
					for (i = 0; i <= sArray.length; i++) {
							if (sArray[i] > numArg) {
								return sArray[i];
							}
					}
		};

		// Function 11
		// Find the total value of just the numbers in an array, even if some of the items are not numbers.
		var numArray = function (arg) {
				var totalArray = arg;
				var total = 0;
				for (i = 0; i < totalArray.length; i++) {
						if (isNaN(totalArray[i]) === false) {
								var total = total + totalArray[i];
						}
				}

				return total;
		};


		return {

							"arrValue": arrValue,
							"numArray": numArray
		}

};

// String Library
var sLib = stringLibrary();
var phoneString = "123-4567";
console.log("Dash is " + sLib.stringPhone(phoneString));
var emailString = "test@test.com";
console.log("email is " + sLib.stringEmail(emailString));
var url = "http://www.test.com";
console.log("This is a valid URL? " + sLib.stringUrl(url));

// Number Libraray
var nLib = numberLibrary();
var moveDecimal = 3.567895;
var places = 4;
console.log("Moved Decimal: " + nLib.numDecimal(moveDecimal, places));
var parseTest = "34";
console.log("Return Actual Number: " + nLib.parseString(parseTest));

// Array Library
var aLib = arrayLibrary();
var smallArray = [4,66,2,9,1,43];
console.log("Smallest Value: " + aLib.arrValue(3, smallArray));
var arrayTest = ["String", 10, "String 2", 20];
console.log("Total Value: " + aLib.numArray(arrayTest));
