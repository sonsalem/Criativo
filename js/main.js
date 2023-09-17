// Search

let search = document.querySelector('.upper-nav .search');
let darkBg = document.querySelector('.darkBg');
let closeV = document.querySelector('.close');
let inputSearch = document.querySelector('.upper-nav .search-input input');

search.addEventListener('click', function () {
    darkBg.classList.add('active');
    closeV.classList.add('active');
    inputSearch.classList.add('active');
})

closeV.addEventListener('click', function () {
  darkBg.classList.remove('active');
  this.classList.remove('active');
  inputSearch.classList.remove('active');
})

// Menu Bar

let toggleMenu = document.querySelector('.toggel-menu');
let menu = document.querySelector('.upper-nav .links');

toggleMenu.addEventListener('click', function () {
  menu.classList.toggle('active')
})