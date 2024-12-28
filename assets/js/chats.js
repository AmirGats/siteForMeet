
// получаем ссылки меню 
const navLinks = document.querySelectorAll(".nav-links");

// Получаем текущий URL
const currentPage = window.location.pathname.split('/').pop();

//Перебираем ссылки и добавляем класс 
navLinks.forEach(link => {
    if(link.getAttribute('href') === currentPage){
        link.classList.add('active');
    }
});

// footer динамический вывод
fetch('components/foot.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
});

// burger

const burger = document.querySelector('.burger');
const burgerSpan = document.querySelector('.burger span')
const nav = document.querySelector('.header__navigation')
burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    nav.classList.toggle('open')
})

