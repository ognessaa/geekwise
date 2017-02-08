(function(){

var firstNames = ['Alf', 'Waldo', 'Rosa', 'Matt Higley', "Saul"].sort(),
    cerealNames = ['Life', 'Tootie Fruties', 'Cheerios', 'Captian Crunch', 'Trix'].sort();

console.log(firstNames);
console.log(cerealNames);
  var nameGenerator = firstNames.length;
  var nameGenerator2 = cerealNames.length;
  var randNum = Math.ceil(Math.random() * nameGenerator) - 1;
  var randNum2 = Math.ceil(Math.random() * nameGenerator2) - 1;
  var funcExec = function(){
  alert(arguments[0] + " " + arguments[1]);
}(firstNames[randNum], cerealNames[randNum2] );
})();
// var userName= prompt('what is yo name??');
// var num1 = parseInt(prompt('Pick a number'));
// var num2 = parseInt(prompt('Pick another number'));
// function funcDec(a, b, c){
//   alert(a + (b + c));
// }
//
// // funcDec(userName, num1, num2);
//
// var carObject = {
//   color: 'white',
//   Make: 'Nissan',
//   model: 'Alitima',
// };
//
// function myModel(a){
//   alert(a.model);
// }
// myModel(carObject);
//
// var funcExec = function(){
//   alert(arguments[0]);
// }('vanessa', 5);



// function(){
//   alert('anon')
// }
