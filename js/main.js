function calculateOffer(event){
    event.preventDefault();

    let typeOfWork = document.getElementById("type-of-work").value;
        let valueNumOfHours = document.getElementById("hours").value;
    let NumOfHours = parseInt(valueNumOfHours);
    let arreyDiscount = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
    let discountNotUsed = [true, true, true, true, true]
    let chooseDiscount = document.getElementById("discount-code").value;
    let notDiscountPrice = 0.00;
    let disconuntedPrice = 0.00;

    if(typeOfWork == 1){
        notDiscountPrice = NumOfHours * 20.50;
        console.log(notDiscountPrice);
    }
    else if(typeOfWork == 2){
        notDiscountPrice = NumOfHours * 15.30;
        console.log(notDiscountPrice);
    }
    else{
        notDiscountPrice = NumOfHours * 33.60;
        console.log(notDiscountPrice);
    }

    let checkDiscount = true;

    for(let i = 0; i < discountNotUsed.length; i++){
         if(discountNotUsed[i] ==false){
            checkDiscount = false; 
         }
    }

if(chooseDiscount == ""){
    document.getElementById("final_price").innerHTML = notDiscountPrice.toFixed(2);
    document.getElementById("original_price").innerHTML = "";
}
else if (checkDiscount == false){
for(let i = 0; i < arreyDiscount.length; i++){
    if (!discountNotUsed[i]){alert("Ah furbetto hai provato a inserire di nuovo il codice eh!")}
    else{
        if(chooseDiscount == arreyDiscount[i]){
            let discountedPrice = notDiscountPrice - (notDiscountPrice * 25 / 100);
            document.getElementById("original_price").innerHTML = notDiscountPrice.toFixed(2);
            document.getElementById("final_price").innerHTML = discountedPrice.toFixed(2);
            discountNotUsed[i] = false;
            }
        }
    }
}
else{
    alert("codice sconto non valido")
    document.getElementById("final_price").innerHTML = notDiscountPrice.toFixed(2);
    document.getElementById("original_price").innerHTML = "";
}

}