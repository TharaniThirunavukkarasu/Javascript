
var month=prompt("enter the month");
var year=prompt("enter the year")
function findDaysInMonth(){

if(month<1 && month<12){
console.log("Invalid month")
}
else if(month==2){
    if(year%4==0){
    console.log("29 days-leap year");
    }
    else{
        console.log("not a leap year")
    }
}
else if(month==4 || month==6 || month==9 || month==11){
console.log("30 day");
}
else{
console.log("31 days");
}
} findDaysInMonth()



