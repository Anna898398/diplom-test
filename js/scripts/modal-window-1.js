let modalWindow = document.querySelector('.modal-window');
let modal = document.querySelector('.modal-window-form');
let openWindowButtons = document.querySelectorAll('.open-modal');
let closeWindowButton = document.querySelector('.close-modal');

openWindowButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modalWindow.classList.add('active');
        modal.classList.add('active');
    })
});

closeWindowButton.addEventListener('click',() => {
    modalWindow.classList.remove('active');
    modal.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === modalWindow) {
        modalWindow.classList.remove('active');
        modal.classList.remove('active');
    }
});