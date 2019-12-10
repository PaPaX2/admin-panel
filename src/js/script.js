
// ADD class show to main-menu
function toggleMenu(visible) {
  document.querySelector('.main-menu').classList.toggle('show', visible);
}

//EXECUTE function toggleMenu when haburger button was clicked
document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

//ADD const for links and content
const links = document.querySelectorAll('.menu-item a');
const contents = document.querySelectorAll('.content');

//LOOP for every link of main-menu
for (let link of links) {

  //LISTENER for Click event
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    //CONST for clicked href attribute whitout #
    const linkFromMenu = e.target.hash.replace('#', '');

    //CONST finding the same name id in the document as clicked href
    const contentTarget = document.getElementById(linkFromMenu).getAttribute('id');
    
    //LOOP for every conent section
    for (let content of contents) {
      
      //IF clicked link is the same as the content section remove class disable
      if (content.id == contentTarget) {
        content.classList.remove('disable', 'top', 'bottom');
        content.classList.add('active');
      }
      //ELSE add class disable
      else content.classList.add('disable');     
    }

    //EXECUTE function toggleMenu to close main-menu in responsive width
    toggleMenu();
  });
  //END loop
}
