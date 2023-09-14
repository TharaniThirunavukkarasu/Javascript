var img1=document.createElement("img");
img1.setAttribute("src","")
img1.setAttribute("style","")

var img2=document.createElement("img");
img2.setAttribute("src","")
img2.setAttribute("style","")


var button1=document.getElementById("but1")
button1.addEventListener("click",on)
function on(){
img1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
img1.style.width="200px";
img2.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
img2.style.width="200px";
};

var button2=document.getElementById("but2")
button2.addEventListener("click",off)
function off(){
img1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
img1.style.width="200px";
img2.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
img2.style.width="200px";
};


document.getElementById("bulb").appendChild(img1)
document.getElementById("cat").appendChild(img2)
  



      
