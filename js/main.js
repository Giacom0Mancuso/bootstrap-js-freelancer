let typeOfWork = document.getElementById("type-of-work").value;
let valueNumOfHours = document.getElementById("hours").value;
let NumOfHours = parseFloat(valueNumOfhours.value);
let arreyDiscount = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
let discountNotUsed = new Array(arreyDiscount.length).fill(true);
let chooseDiscount = document.getElementById("discount-code").value;
let totalNotDiscountPrice=0;

if(typeOfWork == 1){
    totalNotDiscountPrice = NumOfHours * 20.50;
}
else if(typeOfWork == 2){
    totalNotDiscountPrice = NumOfHours * 15.30;
}
else{
    totalNotDiscountPrice = NumOfHours * 33.60;
}

