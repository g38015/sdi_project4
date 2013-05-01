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
				if (url.substring(0,7) == "http://" || url.substring(0,8) == "https://") {
						return true;

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
			var numDecimal = function (arg) {
					var decimalPlaces = arg.toFixed(3);
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
		var arrValue = function (arg) {
					var arrMin = arg[1];
					for (i = 0; i < arg.length; i++) {
							if (arg[i] < arrMin) {
								return arrMin;
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
								return total + totalArray[i];
						}
				}

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
var url = "http//www.test.com";
console.log("Url is " + sLib.stringUrl(url));

// Number Libraray
var nLib = numberLibrary();
var moveDecimal = 3.5678;
console.log("Moved to " + nLib.numDecimal(moveDecimal));
var parseTest = "34";
console.log("Return Number " + nLib.parseString(parseTest));

// Array Library
var aLib = arrayLibrary();
var smallArray = [4,34,66,2,9,1];
console.log("Here it is " + aLib.arrValue(smallArray));
var arrayTest = ["String", 10, "String 2", 20];
console.log("Test Number " + aLib.numArray(arrayTest));
