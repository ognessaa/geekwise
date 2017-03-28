(function(){
    getReq('https://www.udacity.com/public-api/v0/courses', init);
}());


function getReq(url, cb){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
      if(req.readyState === 4 && req.status === 200){
        cb( JSON.parse(req.responseText) );
      }else{
        console.log('error', req.statusText);
      }
   }
   req.send(null);
}

function init(data){
  console.log(data.tracks);
  var main = document.querySelector('main'),
      ul = document.createElement('ul'), li, expected_learning, homepage, image, required_knowledge;

  main.appendChild(ul);
