
 var year=parseInt(prompt("enter the year"));

function checkLeapYear(){
    if(year%4==0 ||year%400==0 && (!year%100==0) ){
    console.log("leap year")
    }
    
    else{
      console.log("not a leap year")  
    }
}
checkLeapYear()








