

const basePriceText = document.getElementById('best-price');
const memoryPriceText = document.getElementById('extra-memory');
const storagePriceText = document.getElementById('extra-storage');
const deliveryPriceText = document.getElementById('delivery-charge');

const totalPriceText = document.getElementById('total-price');
const finalPrice = document.getElementById('final-price');


totalPrice();


// memory price calculation
document.getElementById('default-memory').addEventListener('click', function () {

    updateMemory(0);
    totalPrice();




});

document.getElementById('16gb-memory').addEventListener('click', function () {

    updateMemory(180);
    totalPrice();




});



// storage price calculation
document.getElementById('default-storage').addEventListener('click', function () {

    updateStorage(0);
    totalPrice();



});
document.getElementById('512gb-ssd').addEventListener('click', function () {

    updateStorage(100);
    totalPrice();



});
document.getElementById('1tb-ssd').addEventListener('click', function () {

    updateStorage(180);
    totalPrice();



});


// delivery price calculate
document.getElementById('default-delivery').addEventListener('click', function () {

    updateDelivery(0);
    totalPrice();



});

document.getElementById('argent-delivery').addEventListener('click', function () {
    updateDelivery(20);
    totalPrice();

});


// update memory price
function updateMemory(price) {

    memoryPriceText.innerText = price;
    return memoryPriceText.innerText;

}

// update storage price
function updateStorage(price) {

    storagePriceText.innerText = price;
    return storagePriceText.innerText;

}

// update delivery price
function updateDelivery(price) {

    deliveryPriceText.innerText = price;
    return deliveryPriceText.innerText;

}


// claculate total price
function totalPrice() {

    const basePrice = parseFloat(basePriceText.innerText);

    const memoryPrice = parseFloat(memoryPriceText.innerText);
    const storagePrice = parseFloat(storagePriceText.innerText);
    const deliveryPrice = parseFloat(deliveryPriceText.innerText);


    // calculate total 
    const totalAmount = basePrice + memoryPrice + storagePrice + deliveryPrice;

    // update total price
    totalPriceText.innerText = totalAmount;

    // update final price
    finalPrice.innerText = totalAmount;


    return totalAmount;

}


// apply promo code
document.getElementById('apply-button').addEventListener('click', function () {

    // const totalValue = parseFloat(totalPrice());
    // const discount = parseFloat(discountAmount());

    const price = totalPrice() - discountAmount();
    finalPrice.innerText = price;


});


// calculate discount
function discountAmount() {
    const totalValue = parseFloat(totalPrice());

    const discountPrice = document.getElementById('discount-price');
    const promocode = document.getElementById('promocode-input');
    const getPromoCode = promocode.value;

    const usedPromo = document.getElementById('promo-apply');
    const addPromo = document.getElementById('promo-empty');


    // check promo code and apply
    if (getPromoCode == 'stevekaku') {

        promocode.value = '';

        addPromo.style.display = 'none';
        usedPromo.style.display = 'inline-block';

        const discount = (totalValue * .20);
        discountPrice.innerText = '-$' + discount;
        return discount;
    }
    else {


        addPromo.style.display = 'block';
        usedPromo.style.display = 'none';

        discountPrice.innerText = '';
        return 0;
    }

}

// focus in promo input field
document.getElementById('promocode-input').addEventListener('focus', function () {
    document.getElementById('price-cart').style.backgroundColor = '#e8cdfa';

});

// focus out promo input field
document.getElementById('promocode-input').addEventListener('blur', function () {
    document.getElementById('price-cart').style.backgroundColor = '#c3d4bc';

});







