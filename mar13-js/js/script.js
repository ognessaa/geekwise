var jeep = document.querySelector( 'header'),
    input = document.querySelector( 'input[type="color"]'),
    inputRot = document.querySelector( 'input[type="text"]'),
    btn = document.querySelector('input[type="submit"]'),
    nav1stLvl = document.querySelectorAll('nav > ul >li');

console.log(nav1stLvl);

nav1stLvl.forEach(function(e, i){
  e.addEventListener('mouseover' , function(){
    this.classList.add('hovering');
  });
  e.addEventListener('mouseout' , function(){
    this.classList.remove('hovering');
  });
});
btn.addEventListener('click' , function(evt){
  evt.preventDefault();
  var jeepColor = input.value;
  var jeepRot = input.value;
  jeep.style.backgroundColor = jeepColor;
  jeep.style.transform = "rotateX(" + jeepRot + "deg)";
});
