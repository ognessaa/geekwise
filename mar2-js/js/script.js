var content = document.getElementById('content');

var h1 = document.createElement( 'h1');
content.appendChild(h1).textContent = "Hello";

var p = document.createElement( 'p');
content.appendChild(p).textContent = "alf";

var a = document.createElement( 'a' );
content.appendChild(a).textContent = "click";
a.id = 'test';
a.href = 'http://google.com';
a.class = 'test 2';
a.target = '_blank';

// console.log(a);
// content.appendChild(a).textContent =

var ul = document.createElement( 'ul');
// content.appendChild(ul);
content.insertBefore(ul, a);

// var input = document.createElement( 'input');
// content.appendChild(input);
// input.type = "text";
// input.placeholder = "click";

var form = document.createElement( 'form');
var userName = document.createElement( 'input');
var userFirst = document.createElement( 'input');
var userLast = document.createElement( 'input');
var userEmail = document.createElement( 'input');
var userPassword = document.createElement( 'input');
var submitBtn = document.createElement( 'input');
var number = document.createElement( 'input');
var br = document.createElement( 'br');
userName.type = "text";
userFirst.placeholder = 'enter your username';
userFirst.placeholder = 'enter your first name';
userFirst.type = "text";
userLast.type = "text";
userLast.placeholder = 'enter your last name';
userEmail.type = "text";
userEmail.placeholder = 'enter your email';
userPassword.type = "text";
userPassword.placeholder = 'enter your password';
number.type = "text";
number.placeholder = 'enter a number';
submitBtn.type = 'submit';
submitBtn.value = 'accept';
form.appendChild(userName);
form.appendChild(userFirst);
form.appendChild(userLast);
form.appendChild(userEmail);
form.appendChild(userPassword);
form.appendChild(number);

form.appendChild(br);
form.appendChild(submitBtn);
content.insertBefore(form, a);

submitBtn.addEventListener('click', function(evt){
      evt.preventDefault();
      getUserName
});
number.addEventListener('click', function(evt){
      if(evt.target.value >= 0){
        evt.target.value = 0;
      }else{
        console.log(evt.target.value);
      }
});

function getUserName(){
  console.log(userName.value);
  userName.value = '';
};
var formArr = [];

function getValues() {
  ul.innerHtml = ''
  // console.log(form.elements[4].value);

  var loopNum = parseInt(number.value);
  for(var i = 0; i < loopNum + 1; i++){
    li = document.createElement( 'li' );
    ul.appendChild(li);
  }
  // for(var i = 0; 1 < form.elements.length - 1; i++){
  //     formArr.push(form.elements[i].value);
  // }
  // console.log(formArr);
}
