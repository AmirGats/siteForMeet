// footer динамический вывод
fetch('components/foot.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
});

// поиск собеседника

 // Данные профиля пользователя
 const userProfile = {
    name: "Иван",
    lastName: "Иванов",
    age: 25,
    sex: "female", // "male", "female" или "other"
    photo: "user-photo.jpg",
    city: "Москва"
};

// Получаем элементы
const findButton = document.getElementById('find-button');
const resultDiv = document.getElementById('result');

// Логика поиска
findButton.addEventListener('click', () => {
    let matchGender;
    switch (userProfile.sex) {
        case "male":
            matchGender = "Женщина";
            break;
        case "female":
            matchGender = "Мужчина";
            break;
        default:
            matchGender = "Без разницы";
    }
    resultDiv.textContent = `Ищем собеседника: ${matchGender}`;
});


// Навигация: выделение активной ссылки
const navLinks = document.querySelectorAll(".nav-links");
const currentPage = window.location.pathname.split('/').pop();

//Перебираем ссылки и добавляем класс 
navLinks.forEach(link => {
    if(link.getAttribute('href') === currentPage){
        link.classList.add('active');
    }
});



// burger

const burger = document.querySelector('.burger');
const burgerSpan = document.querySelector('.burger span')
const nav = document.querySelector('.header__navigation')
burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    nav.classList.toggle('open')
})
