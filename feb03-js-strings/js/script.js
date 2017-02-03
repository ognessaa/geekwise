var origString = "The original";
var firstString = "A literal string";
var secondString = new String("A string object");

// var concatString = firstString+secondString;

// console.log( concatString );


var firstName  = "Vanessa";
var lastName = "Diaz";
// var middleName = "Martha Alice";

var fullName = firstName + " " + lastName;
// console.log( fullName);

var getIndex = firstString.match('it');
// console.log(getIndex);

var birth = "1999";
var twenty = "2020";
var age = twenty - birth;
var nameString = "my name is";
var born = " I was born in";
var and = "and in";
var next = " I will be";
var sentence = nameString + "" + firstName + "" + lastName + "" + born + "" + birth + "" + and + "" + twenty + "" + next + "" + age;
console.log(sentence);
