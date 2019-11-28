function toggleMenu(visible) {
  document.querySelector('.main-menu').classList.toggle('show', visible);
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

function toggleSection(notvisible) {
  document.querySelector('.content').classList.toggle('disable', notvisible);
}

document.querySelector('.menu-item').addEventListener('click', function(e) {
  e.preventDefault();
  toggleSection();
});