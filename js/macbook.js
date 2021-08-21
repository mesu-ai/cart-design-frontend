

const basePriceText = document.getElementById('best-price');
const memoryPriceText = document.getElementById('extra-memory');
const storagePriceText = document.getElementById('extra-storage');
const deliveryPriceText = document.getElementById('delivery-charge');

const totalPriceText = document.getElementById('total-price');


const totalAmount = totalPrice();
console.log(totalAmount);


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



    const totalAmount = basePrice + memoryPrice + storagePrice + deliveryPrice;
    totalPriceText.innerText = totalAmount;

    console.log(totalAmount);
    return totalAmount;


}



