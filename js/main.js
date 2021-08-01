// document.getElementsByClassName('header__menu').onclick = function () {
//    document.getElementById('main').classList.add('main--main-bg');
//    document.getElementsByClassName('main').classList.toggle('main--main-bg');
// }

document.querySelector(".header__menu").onclick = function () {
   document.querySelector(".header__menu-content").classList.add("open");
}

document.querySelector(".header__close").onclick = function () {
   document.querySelector(".header__menu-content").classList.remove("open");
}

// const menu = Array.from(document.querySelectorAll('.header__menu'));
// const triggers = Array.from(document.querySelectorAll('.header__menu-content'));

// triggers.forEach((item, i) => { // проходимся по каждому тригеру
//    item.addEventListener('click', (e) => { // ставим на него слушатель события клика
//       menu[i].classList.toggle('active'); // что-то делаем
//    });
// });

// let = obj = document.querySelectorAll('.header__menu-list');

// function menu() {
//    this.className = 'open';
// }

// for (let i = 0; i < obj.length; i++) {
//    obj[i].onclick = menu;

// }