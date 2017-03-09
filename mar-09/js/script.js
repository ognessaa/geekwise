(function(){
var distance = document.querySelector('#meter li:nth-child(1) span'),
    winW = document.querySelector('#meter li:nth-child(2) span'),
    winH = document.querySelector('#meter li:nth-child(3) span'),
    hero = document.querySelector('header'),
    heroH = document.querySelector('#meter li:nth-child(4) span'),
    sec1 = document.querySelector('section:nth-child(1)'),
    sec2 = document.querySelector('section:nth-child(2)'),
    sec3 = document.querySelector('section:nth-child(3)');

console.log(sec1);
var dist = 0,
winWidth = window.innerWidth,
winHeight = window.innerHeight,
heroHeight = hero.clientHeight,
sec1Height = 0;

distance.textContent = dist;
winW.textContent = winWidth;
winH.textContent = winHeight;
heroH.textContent = heroHeight;

if(window.innerHeight > sec1.offsetTop){
  sec1.classList.add('visible');
}

window.addEventListener('resize', function(){
  winW.textContent = window.innerWidth;
  winH.textContent = window.innerHeight;
  heroH.textContent = hero.clientHeight;

  if(window.innerHeight > sec1.offsetTop){
    sec1.classList.add('visible');
  }else{
    sec1.classList.remove('visible');
  }
});

console.log(window);
window.addEventListener('scroll', function(){
    dist = window.scrollY;
    distance.textContent = dist;

    // console.log(winHeight - sec1.offsetTop);
    if( (sec1.offsetTop - dist) - winHeight <= 0){
      console.log('its visible');
      sec1.classList.add('colorIn');
    }else{
      sec1.classList.remove('colorIn');
    }if ( (sec1.offsetTop - dist) - winHeight <= 0 ){
      sec2.classList.add('color');
    }else{
      sec2.classList.remove('color');
    }if ( (sec1.offsetTop - dist) - winHeight <= 0 ){
      sec3.classList.add('colorOut')
    }else{
      sec3.classList.remove('colorOut');
      }

});

console.log(sec2);
}());
