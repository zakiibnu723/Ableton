const menuToggle = document.querySelector('.menu-toggle input');
const navbar1 = document.querySelector('.navbar1')

menuToggle.addEventListener('click', function() {
    navbar1.classList.toggle('slide');
});