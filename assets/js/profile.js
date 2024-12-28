// footer
fetch('components/foot.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
});

// получим все элементы :

//все элементы формы
const photoInput = document.getElementById('photo');
const fullNameInput = document.getElementById('fullName');
const cityInput = document.getElementById('city');
const ageInput = document.getElementById('age');
const sexInput = document.getElementById('sex');
const profilePhoto = document.getElementById('profilePhoto');
const saveButton = document.getElementById('saveProfile');


// элементы для отображения данных
const resultName = document.getElementById('resultName');
const resultCity = document.getElementById('resultCity');
const resultAge = document.getElementById('resultAge');
const resultSex = document.getElementById('resultSex');

// для фото
let photoBase64 = '';


// Обработчик загрузки фото

photoInput.addEventListener('change', function() {
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function (e){
            profilePhoto.src = e.target.result; // Установка загруженного фото
            photoBase64 = e.target.result;
        };
        reader.readAsDataURL(file); // чтение файла
    }
});

// Обработчик сохранения профиля

saveButton.addEventListener('click', function() {
    const fullName = fullNameInput.value.trim();
    const city = cityInput.value.trim();
    const age = ageInput.value.trim();
    const sex = sexInput.value;
    


    if(!fullName || !city || !age || !sex){
        alert('Пожалуйста, заполните все поля');
        return;
    }
    

    //Сохраним данные с profile-data
const profileData = {
    fullName,
    city,
    age,
    sex,
    photo: photoBase64 || profilePhoto.src,
}

// сохраним все в localStorage

localStorage.setItem('profile', JSON.stringify(profileData)); // преобразуем обьект в строку и сохраняем

    //Обновление данных профиля
    resultName.textContent = fullName;
    resultCity.textContent = city;
    resultAge.textContent = age;
    resultSex.textContent = sex;

    alert('Данные успешно сохранены !');

});


//загрузка данных из localStorage в profile-data
window.addEventListener('DOMContentLoaded', function(){
const savedProfile = JSON.parse(localStorage.getItem("profile"));

if (savedProfile) {
    // установка значений в форму
    fullNameInput.value = savedProfile.fullName;
    cityInput.value = savedProfile.city;
    ageInput.value = savedProfile.age;
    sexInput.value = savedProfile.sex;
    // отображаем данные на стр
    resultName.textContent = savedProfile.fullName;
    resultCity.textContent = savedProfile.city;
    resultAge.textContent = savedProfile.age;
    resultSex.textContent = savedProfile.sex;

    if(savedProfile.photo){
        profilePhoto.src = savedProfile.photo;
    }
}
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
