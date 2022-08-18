document.getElementById('sub-btn').addEventListener('click',function(){
    // step 1 get the price field value
    const priceField = document.getElementById('price');
    const priceString = priceField.value;
    const price = parseFloat(priceString);
    priceField.value = '';
    // step 2 get the discount field value
    const discountField = document.getElementById('discount');
    const discountString = discountField.value;
    const discount = parseFloat(discountString);
    discountField.value = '';
    // step 3 get the coupon code field
    const couponCode = document.getElementById('coupon-code');
    const couponCodeText = couponCode.value;
    couponCode.value = '';
    if(couponCodeText !== 'dom'){
        return;
    }
    const lastPriceField = document.getElementById('last-price');
    const totalDiscountPrice =price - ((price  / 100 ) * discount);
    lastPriceField.innerText = totalDiscountPrice;

})