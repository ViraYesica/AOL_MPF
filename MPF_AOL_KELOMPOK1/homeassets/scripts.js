const btnNav = document.getElementById('btnNav');
const navMenus = document.getElementById('navMenus');

btnNav.addEventListener('click', () => {
    navMenus.classList.toggle('show-nav');
})