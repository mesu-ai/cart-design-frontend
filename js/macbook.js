

const basePriceText = document.getElementById('best-price');
const memoryPriceText = document.getElementById('extra-memory');
const storagePriceText = document.getElementById('extra-storage');
const deliveryPriceText = document.getElementById('delivery-charge');

const usedPromo = document.getElementById('promo-apply');
const addPromo = document.getElementById('promo-empty');


const inputCode = document.getElementById('promocode-input');
const discountPrice = document.getElementById('discount-price');

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


    const inputValue = inputCode.value;

    if (inputValue == 'stevekaku') {
        discountAmount();

    }
    else {

        console.log('bye');
        addPromo.style.display = 'block';
        usedPromo.style.display = 'none';
        inputCode.value = '';
        discountPrice.innerText = '';
    }

});


// calculate discount and update final price

function discountAmount() {

    addPromo.style.display = 'none';
    usedPromo.style.display = 'inline-block';


    const discount = (totalPrice() * .2);
    const finalPrice = (totalPrice() - discount);

    // discount update
    discountPrice.innerText = '-$' + discount;


    const price = document.getElementById('final-price');
    price.innerText = finalPrice;


    inputCode.value = '';

}

// focus in promo input field
document.getElementById('promocode-input').addEventListener('focus', function () {
    document.getElementById('price-cart').style.backgroundColor = '#e8cdfa';

});

// focus out promo input field
document.getElementById('promocode-input').addEventListener('blur', function () {
    document.getElementById('price-cart').style.backgroundColor = '#c3d4bc';

});







