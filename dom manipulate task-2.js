var button1 = document.getElementById("btn");
button1.addEventListener("click", add);
function add(){
var text=document.getElementById("inputbox")
 var ul=document.getElementById("list")
 var li=document.createElement("li")
 li.textContent=text.value;
 ul.appendChild(li)
 text.value=""
}
