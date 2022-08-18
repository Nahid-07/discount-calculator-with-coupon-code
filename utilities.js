function getPriceFieldValue(priceId){
    const priceField = document.getElementById(priceId);
    const priceString = priceField.value;
    const price = parseFloat(priceString);
    priceField.value = '';
    return price
}
function discountText (discountID){
    const discoountField = document.getElementById(discountID);
    const discountString = discoountField.value;
    discoountField.value='';
    return discountString
}
function setTextValue (elementID,total){
    const lastPriceField = document.getElementById(elementID);
    lastPriceField.innerText = total;
}