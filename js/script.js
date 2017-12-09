var button_modal = document.querySelector('.buttion-modal-info');
var close = document.querySelector('.modal-login .modal-close');
var popup = document.querySelector('.modal-login');

button_modal.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('visually-hidden');
});

close.addEventListener('click', function (evt) {
    popup.classList.add('visually-hidden');
});