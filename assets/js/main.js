// Модальное окно для входа
const modal = document.querySelector('.modal')

function openModal() {
    modal.classList.add("active")
}

function closeModal() {
    modal.classList.remove("active")
}

// Модальное окно для регистрации
const reg = document.querySelector('.modal__reg')

function openModalReg() {
    reg.classList.add("active")
}

function closeModalReg() {
    reg.classList.remove("active")
}

// автоматический вывод header и footer

// header
fetch('components/head.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
});

// footer
fetch('components/foot.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
});
