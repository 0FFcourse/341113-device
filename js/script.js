var button_modal = document.querySelector('.buttion-modal-info');
var close = document.querySelector('.modal-login .modal-close');
var popup = document.querySelector('.modal-login');
var radio_button_1 = document.querySelector('.radio-button-1');
var radio_button_2 = document.querySelector('.radio-button-2');
var radio_button_3 = document.querySelector('.radio-button-3');
var active_1 = document.querySelector('.radio-button-1');
var active_2 = document.querySelector('.radio-button-2');
var active_3 = document.querySelector('.radio-button-3');
var services_1 = document.querySelector('.button-delivery');
var services_2 = document.querySelector('.guarantee-button');
var services_3 = document.querySelector('.credit-button');
var services_1_active = document.querySelector('.button-delivery');
var services_2_active = document.querySelector('.guarantee-button');
var services_3_active = document.querySelector('.credit-button');
var description_1 = document.querySelector('.description-delivery');
var description_2 = document.querySelector('.description-guarantee');
var description_3 = document.querySelector('.description-credit')


// Всплывающая форма
button_modal.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('visually-hidden');
});

close.addEventListener('click', function () {
    popup.classList.add('visually-hidden');
});


//Переключение слайдов
radio_button_1.addEventListener('click', function () {
    active_1.classList.add('active');
    active_2.classList.remove('active');
    active_3.classList.remove('active');
});

radio_button_2.addEventListener('click', function () {
    active_1.classList.remove('active');
    active_2.classList.add('active');
    active_3.classList.remove('active');
});

radio_button_3.addEventListener('click', function () {
    active_1.classList.remove('active');
    active_2.classList.remove('active');
    active_3.classList.add('active');
});


//Переключение блоков с текстом
services_1.addEventListener('click', function () {
    services_1_active.classList.add('button-active');
    services_2_active.classList.remove('button-active');
    services_3_active.classList.remove('button-active');
    description_1.classList.remove('visually-hidden');
    description_2.classList.add('visually-hidden');
    description_3.classList.add('visually-hidden');
});

services_2.addEventListener('click', function () {
    services_1_active.classList.remove('button-active');
    services_2_active.classList.add('button-active');
    services_3_active.classList.remove('button-active');
    description_1.classList.add('visually-hidden');
    description_2.classList.remove('visually-hidden');
    description_3.classList.add('visually-hidden');
});

services_3.addEventListener('click', function () {
    services_1_active.classList.remove('button-active');
    services_2_active.classList.remove('button-active');
    services_3_active.classList.add('button-active');
    description_1.classList.add('visually-hidden');
    description_2.classList.add('visually-hidden');
    description_3.classList.remove('visually-hidden');
});