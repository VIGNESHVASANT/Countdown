var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    var img = new Image(); 
var div = document.getElementById('countdown'); 
 
img.onload = function() { 
  div.appendChild(img); 
}; 
 
img.src = `https://images.wallpapersden.com/image/download/marvel-iron-man-art_a21mZ2eUmZqaraWkpJRmZW1lrWZuZ2U.jpg`;
    
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);