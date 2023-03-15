document.addEventListener("DOMContentLoaded", function () {
    let searchString = document.querySelector('.header__search');
    let search = document.querySelector('.header__btn');
    let searchClose = document.querySelector('.search__close');
    
    search.addEventListener('click',
    
        function () {
            searchString.classList.add('header__search--active');
        })
    
    searchClose.addEventListener('click',
    
        function () {
            searchString.classList.remove('header__search--active');
        })
});
    

