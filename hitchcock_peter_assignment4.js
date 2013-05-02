// alert("JavaScript works!");
// Github https://github.com/g38015/sdi_project4
// Peter Hitchcock
// SDI 1304
// April 29, 2013
// Project 4

// Javascript Library

// String Library

var stringLibrary = function () {


		// Function 2
		// Does a string follow an aaa@bbb.ccc pattern like an email address?
		var stringEmail = function (arg) {

			var email = arg;
			checkPos = email.indexOf("@");
			stopPos = email.lastIndexOf(".");

			if (email == "") {

					return false;
			}

			if (checkPos == -1 || stopPos == -1) {

					return false;
			}

			if (stopPos < checkPos) {

					return false;
			}

			if (stopPos - checkPos == 1) {

					return false;
			}

			else {

					return true;
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
					var largestVal = [];
					for (i = 0; i < arrayArg.length; i++){
							if (arrayArg[i] < arg) {
								largestVal.push(arrayArg[i]);
							}
					}

					var smallestVal = largestVal[0];

					for (j = 0; j < largestVal.length; j++) {
							if (smallestVal > largestVal[j]) {
								smallestVal = largestVal[j];
							}
					}
					return smallestVal;
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
var emailString = "test@test.com";
console.log("Is this a valid email address? " + sLib.stringEmail(emailString));
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
var smallArray = [4,66,2,9,43];
var argNum = 15;
console.log("Smallest Value: " + aLib.arrValue(argNum, smallArray));
var arrayTest = ["String", 10, "String 2", 20];
console.log("Total Value: " + aLib.numArray(arrayTest));
