console.log('Loaded!');

//change the text to main-text div
var element = document.getElementById("main-text");
element.innerHTML  = "New Value";

//move the image on click
var img = document.getElementById("madi");
img.onclick = function(){
    img.style.marginLeft = '100px';
}
