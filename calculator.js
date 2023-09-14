







function add()
{
    var firstNumber=document.getElementById("num")
    var secondNumber=document.getElementById("num1")
    var a=firstNumber.value;
    var b=secondNumber.value;
    document.getElementById("para").innerHTML=parseInt(a)+parseInt(b)
    firstNumber.value="";
    secondNumber.value="";
}
function sub()
{
    var firstNumber=document.getElementById("num")
    var secondNumber=document.getElementById("num1")
    var a=firstNumber.value;
    var b=secondNumber.value;
    document.getElementById("para").innerHTML=parseInt(a)-parseInt(b)
    firstNumber.value="";
    secondNumber.value="";
}
function mul()
{
    var firstNumber=document.getElementById("num")
    var secondNumber=document.getElementById("num1")
    var a=firstNumber.value;
    var b=secondNumber.value;
    document.getElementById("para").innerHTML=parseInt(a)*parseInt(b)
    firstNumber.value="";
    secondNumber.value="";
}
function div()
{
    var firstNumber=document.getElementById("num")
    var secondNumber=document.getElementById("num1")
    var a=firstNumber.value;
    var b=secondNumber.value;
    document.getElementById("para").innerHTML=parseInt(a)/parseInt(b)
    firstNumber.value="";
    secondNumber.value="";
}
function mod()
{
    var firstNumber=document.getElementById("num")
    var secondNumber=document.getElementById("num1")
    var a=firstNumber.value;
    var b=secondNumber.value;
    document.getElementById("para").innerHTML=parseInt(a)%parseInt(b)
    firstNumber.value="";
    secondNumber.value="";
}



