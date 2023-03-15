document.addEventListener("DOMContentLoaded", function () {
    let addressBox = document.querySelector('.contacts__box');
    let addressClose = document.querySelector('.box__btn');
    
    addressClose.addEventListener('click', () => {
        addressBox.classList.add('contacts__box--close')
    })
});
   
