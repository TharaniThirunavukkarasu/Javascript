function checkInRange(num,start,end){
    if(num>=start && num<=end){
        console.log(num +"is between" +start +"and" +end);
    }
    else{
       console.log(num+ "is outside"+ start +"and" +end); 
    }
}checkInRange(15,11,30)
checkInRange(20,34,51)