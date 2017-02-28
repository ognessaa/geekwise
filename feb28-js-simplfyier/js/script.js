// document.querySelector('button').addEventListener('click', function(){
//     // console.log( add(7, 3, 2) );
//     addEx(3, 4, 5, 5, 4, 'vanessa', 3, 7, 4563)
// });
//
// function add(num1, num2, num3){
//    return (num1 + num2) / num3;
// }
//
// var addEx = function(){
//   console.log(arguments);
//   var total = 0;
//
//   for(var i = 0; i < arguments.length; i++){
//     if( typeof arguments[1].type !== 'string'){
//       total = arguments[i] + total;
//     }
//   }
//   console.log(total);
// };
 console.log(firstName() + ' ' + lastName());

 function firstName(){
   return 'vanessa'
 }
 function lastName(){
   return 'diaz'
 }

document.querySelector('input[type="submit"]').addEventListener('click', function(gi){
  gi.preventDefault();
  getInfo();
  for (var i = 0; i < form.elements.length; i++){
    form.elements
  }
});
var form = document.querySelector( 'form' );

function getInfo(){
  console.log(
    'welcome' + getName(form) + 'to your site. Your email is' + getEmail(form)
  );
  function getName(arr){
    for(var i = 0; i < arr.elements.length; i++){
      if(arr.elements[i].type === 'text'){
        names = arr.elements[i].value + '';
      }
    }
    return names;
  }
  function getEmail(arr){
    var emails = '';
    for(var i = 0; i < arr.elements.length; i++){
      if(arr.elements[i].type === 'email'){
        emails = emails + arr.elements[i].value + '';
      }
    }
    return emails;
  }
}
    function getCheck(arr){
      var checks = '';
      for(var i = 0; i < arr.elements.length; i++){
        if(arr.elements[i].type === 'checkbox' && arr.elements[i].checked){
          checks +=  arr.elements[i].value + '';
        }
      }
      return checks;
    }
