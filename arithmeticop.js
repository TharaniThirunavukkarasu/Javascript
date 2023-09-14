var num1=parseInt(prompt("Enter the num1:"));
var num2=parseInt(prompt("Enter the num2:"));
var op=prompt("Enter the op");
function evalNumbers(){
    if(op=="add"){
        
        console.log("result of"+ num1 +"and" +num2 +"is"+parseInt(num1+num2));
    }
    else if(op=="sub"){
       
        console.log("result of"+ num1 +"and"+ num2 +"is"+parseInt( num1-num2));
    }
    else if(op=="multiply"){
        multiply=num1*num2;
        console.log("result of"+ num1 +"and" +num2 +"is"+parseInt(num1*num2));
    }
    else if(op=="divide"){
        divide=num1/num2;
        console.log("result of"+ num1 +"and" +num2 +"is"+ parseInt(num1/num2));
    }
    else if(op=="modulus"){
        modulus=num1%num2;
        console.log("result of"+ num1 +"and" +num2 +"is"+ parseInt(num1%num2));
    }
    else{
        console.log("invalid operation");
    }
}
evalNumbers()
