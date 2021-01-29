

var firstClassTotal = 0;
var economyClassTotal = 0;
var subTotal = 0;
var tax = 0;
var total = 0;

// First class ticket plus function

document.getElementById("first-class-plus-btn").addEventListener("click", function(){
    const   plusCountString = document.getElementById("first-class-ticket-count").value;
    const plusCount = parseInt(plusCountString);
    const newPlusCount = plusCount + 1;
    document.getElementById("first-class-ticket-count").value = newPlusCount;
    firstClassTotal = newPlusCount * 150;

    subTotal = firstClassTotal + economyClassTotal;
    document.getElementById("sub-total").innerText = subTotal;

    tax = subTotal * 0.1;
    
    document.getElementById("tax").innerText = tax;

    total = subTotal + tax;

    document.getElementById("total").innerText = total;
    
});

// First class ticket minus function

document.getElementById("first-class-minus-btn").addEventListener("click", function(){
    const minusCountString = document.getElementById("first-class-ticket-count").value;
    const minusCount = parseInt(minusCountString);
    var newMinusCount;
    if(minusCount > 0){
        newMinusCount = minusCount - 1;
        document.getElementById("first-class-ticket-count").value = newMinusCount;
        firstClassTotal = newMinusCount * 150;

    }

    
    subTotal = firstClassTotal + economyClassTotal;
    document.getElementById("sub-total").innerText = subTotal;

    tax = subTotal * 0.1;
    
    document.getElementById("tax").innerText = tax;
    
    total = subTotal + tax;

    document.getElementById("total").innerText = total;
});


// Economy class ticket plus function

document.getElementById("economy-class-plus-btn").addEventListener("click", function(){
    const economyPlusCountString = document.getElementById("economy-class-ticket-count").value;
    const economyPlusCount = parseInt(economyPlusCountString);
    const newEconomyPlusCount = economyPlusCount + 1;
    document.getElementById("economy-class-ticket-count").value = newEconomyPlusCount;

    economyClassTotal = newEconomyPlusCount * 100;

    subTotal = firstClassTotal + economyClassTotal;
    document.getElementById("sub-total").innerText = subTotal;

    tax = subTotal * 0.1;

    document.getElementById("tax").innerText = tax;

    total = subTotal + tax;

    document.getElementById("total").innerText = total;
});


// Economy class ticket minus function

document.getElementById("economy-class-minus-btn").addEventListener("click", function(){
    const economyMinusCountString = document.getElementById("economy-class-ticket-count").value;
    const economyMinusCount = parseInt(economyMinusCountString);
    var newEconomyMinusCount;
    if(economyMinusCount > 0){
        newEconomyMinusCount = economyMinusCount - 1;
        document.getElementById("economy-class-ticket-count").value = newEconomyMinusCount;
        economyClassTotal = newEconomyMinusCount * 100;
        
    }

    subTotal = firstClassTotal + economyClassTotal;
    document.getElementById("sub-total").innerText = subTotal;

    tax = subTotal * 0.1;

    document.getElementById("tax").innerText = tax;
    
    total = subTotal + tax;

    document.getElementById("total").innerText = total;
    
});

