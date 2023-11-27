let typeOfWork = document.getElementById("type-of-work").value;
let valueNumOfHours = document.getElementById("hours").value;
let NumOfHours = parseFloat(valueNumOfHours);
let arreyDiscount = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
let discountNotUsed = [true, true, true, true, true]
let chooseDiscount = document.getElementById("discount-code").value;
let notDiscountPrice=0.00;
let disconuntedPrice = 0.00;

if(typeOfWork.value == 1){
    notDiscountPrice = NumOfHours * 20.50;
}
else if(typeOfWork.value == 2){
    notDiscountPrice = NumOfHours * 15.30;
}
else{
    notDiscountPrice = NumOfHours * 33.60;
}



for(let i = 0; i < arreyDiscount.length; i++){
    if (!discountNotUsed){alert("Ah furbetto hai provato a inserire di nuovo il codice eh!")}
    else{
    if(chooseDiscount == arreyDiscount[i]){
        disconuntedPrice = notDiscountPrice - (notDiscountPrice * 25 / 100);
        document.getElementById("original_price").innerHTML = notDiscountPrice.toFixed(2);
        document.getElementById("final_price").innerHTML = discountedPrice.toFixed(2);
        discountNotUsed[i] = false;
    }
}
}

let checkDiscount = true;

for(let i = 0; i < discountNotUsed.length; i++){
     if(discountNotUsed[i] ==false){
        checkDiscount = false; 
     }
}

if (checkDiscount == true){
    document.getElementById("final_price").innerHTML = notDiscountPrice.toFixed(2);
        document.getElementById("original_price").innerHTML = "";
}
