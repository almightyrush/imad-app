console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "New HTml Edited";
var img = document.getElementById("img");
img.onlclick = function(){
  img.style.marginLeft = '100px';  
};