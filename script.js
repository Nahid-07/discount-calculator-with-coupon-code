document.getElementById('sub-btn').addEventListener('click',function(){
    // step 1 get the price field value
    const priceField = getPriceFieldValue('price');
    // step 2 get the discount field value
    const discountField = getPriceFieldValue('discount');
    if(isNaN(priceField) && isNaN(discountField)){
        alert("please enter a valid number");
    }
    // step 3 get the coupon code field
    const couponCode = discountText('coupon-code');
    if(couponCode !== 'dom'){
        alert('Your given coupon code is wrong');
        return;
    }
    const totalDiscountPrice =priceField - ((priceField  / 100 ) * discountField);
    setTextValue('last-price',totalDiscountPrice)

})