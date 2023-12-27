var mobileMenuBtn = document.getElementById('bond-mobile-menu-btn');
var navigationWrapper = document.querySelector('.bond-navigation-wrapper');

mobileMenuBtn.addEventListener('click', function () {
    console.log('Button clicked!'); 
    navigationWrapper.classList.toggle('bond-mobile-menu-open');
    mobileMenuBtn.classList.toggle('cross');
});