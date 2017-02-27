var login = document.getElementById('login');
var loginForm =
'<form >'+
  '<h1> Please Login </h1>' +
  '<label>' +
    '<span>username</span>' +
    '<input type="text" placeholder="username"/>' +
  '</label>' +
  '<label>' +
    '<span>password</span>' +
    '<input type="text" placeholder="password"/>' +
  '</label>' +
  '<label>' +
    '<span></span>' +
    '<input type="submit" value="go"/>' +
  '</label>' +
'</form>' ;
login.innerHTML = loginForm;

document.querySelector('#login input[type="submit"]').addEventListener('click', function(e){
    e.preventDefult();
    getFormVals();
});
var form = document.querySelector('#login form');

function getFormVals(){
  var formInputs = [];
  console.log(form.elements);
  for (var i = 0; i < form.length - 1; i++){
    formInputs.push(form.elements[i].value);
  }
  console.log(formInputs);
}
function dropCapInputs(arr){
  // if(arr.constructor === Array){
  if(Array.isArray(arr)){
    arr.forEach(function(e, i){
    console.log(arr[i].toLowerCase());
  });
    return arr;
  }
}
