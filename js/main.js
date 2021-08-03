// document.getElementsByClassName('header__menu').onclick = function () {
//    document.getElementById('main').classList.add('main--main-bg');
//    document.getElementsByClassName('main').classList.toggle('main--main-bg');
// }

// const list = document.querySelectorAll('.CatalogMenu li a')
// list.forEach(item => {
//    item.addEventListener('click', (e) => {
//       list.forEach(el => { el.classList.remove('active'); });
//       item.classList.add('active')
//    })
// })
const menu = document.querySelector(".header__search");
const button = document.querySelector(".header__search-btn");

// window.addEventListener('click', function (e) {
//    document.querySelector(".header__search-btn").onclick = function () {
//       if (!menu.contains(e.target) && !button.contains(e.target)) {
//          document.querySelector(".header__search").classList.toggle("open");
//          document.querySelector(".header__search-field").classList.toggle("open");
//          menu.classList.add('hide');
//       }


//SEARCH
document.querySelector(".header__search-btn").onclick = function () {
   document.querySelector(".header__search").classList.toggle("open");
   document.querySelector(".header__search-field").classList.toggle("open");
   this.classList.remove("open");
}





// MOBILE MENU   
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