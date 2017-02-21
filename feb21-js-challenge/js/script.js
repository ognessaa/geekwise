//
// var btn = document.getElementById('btn');
// var div = document.getElementsByTagName('div');
// var classes = document.getElementsByClassName('list-four');
// var lis = document.querySelectorAll('li:nth-of-type(odd)');
// var ul = document.querySelector('ul');
// console.log(div);
//
// for(var a = 0; a < lis.length; a++){
//   lis[a].style.backgroundColor = 'blue';
// }
// for(var i = 0; i < div.length; i++){
//   div[i].addEventListener('mouseover', function(){
//     alert('hovering the div');
//   });
// }
// for(var i = 0; i < classes.length; i++){
//   classes[i].addEventListener('click', function(){
//     alert('clicked on the list item');
//   });
// }
// btn.addEventListener('click', function(){
//   var user = prompt('whats your first name?').trim();
//   if(user.length < 5 || user.trim() === ''){
//     alert('wrong');
//   }else{
//       alert(user);
//     }
//   });


var input = document.querySelector('input[type="text"]');
var inputBtn = document.querySelector('input[type="submit"]');

inputBtn.addEventListener('click', function(){
  e.preventDefult();
  var userName = input.value;
  console.log(userName);
});
