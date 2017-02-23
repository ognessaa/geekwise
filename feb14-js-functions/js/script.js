function funcName(){
  var userName = prompt('What is your full name?').trim();
  console.log(userName);
  b(userName);
}
function b(user){
  var cased = user.charAt(0).toUpperCase() + user.substr(1).toLowerCase();
  c(cased);
}
funcName();
  alert(user);


var alf = document.getElementById('alf');
var waldo = document.getElementById('waldo');
var content = document.getElementById('content');


alf.addEventListener('click', function(){
  userFirstName = prompt('whats your first name?');
  console.log(typeof parseInt(userFirstName) );
  if( isNaN(userFirstName) ){
    alf.disabled = false;
    waldo.disabled = true;
  }else {
    alert('please type your name');
  }
  // waldo.removeAttribute('disabled');
});
waldo.addEventListener('click', function(){
    var userLastName = prompt('whats your last name?');
    // alf.setAttribute('disabled', true);
    if( isNaN(userFirstName) ){
      alf.disabled = true;
      waldo.disabled = false;
    }else {
      alert('please type your name');
    }
    div.content = userFirstName + userLastName
  // alert(userFirstName + userLastName);
  waldo.removeAttribute('disabled');
  alf.setAttribute('disabled', true);

});
