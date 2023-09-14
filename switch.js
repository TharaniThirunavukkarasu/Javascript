var age=60;
var age=parseInt(prompt("Enter age"));
switch(true)
{
case(age>=18 && age<60):
    console.log("eligible for vote");
    break;

case(age<18):
    console.log(" not eligible for vote");
    break;

case(age>60):
    console.log(" Senior citizen");
    break;
}
