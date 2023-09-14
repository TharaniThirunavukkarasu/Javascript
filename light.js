var button1 = document.getElementById("stopButton");
button1.addEventListener("click", red)
function red() {
    container1 = document.getElementById("stopLight");
    container1.style.backgroundColor = "red";
    button1.style.backgroundColor = "red"
    container2 = document.getElementById("readyLight");
    container2.style.backgroundColor = "grey";
    button2.style.backgroundColor = "grey";
    container3 = document.getElementById("goLight");
    container3.style.backgroundColor = "grey";
    button3.style.backgroundColor = "grey";
}

var button2 = document.getElementById("readyButton");
button2.addEventListener("click", yellow)
function yellow() {
    container2 = document.getElementById("readyLight");
    container2.style.backgroundColor = "yellow";
    button2.style.backgroundColor = "yellow";
    container1 = document.getElementById("stopLight");
    container1.style.backgroundColor = "grey";
    button1.style.backgroundColor = "grey"
    container3 = document.getElementById("goLight");
    container3.style.backgroundColor = "grey";
    button3.style.backgroundColor = "grey";
}

var button3 = document.getElementById("goButton");
button3.addEventListener("click", green)
function green() {
    container3 = document.getElementById("goLight");
    container3.style.backgroundColor = "green";
    button3.style.backgroundColor = "green";
    container1 = document.getElementById("stopLight");
    container1.style.backgroundColor = "grey";
    button1.style.backgroundColor = "grey"
    container2 = document.getElementById("readyLight");
    container2.style.backgroundColor = "grey";
    button2.style.backgroundColor = "grey";
}