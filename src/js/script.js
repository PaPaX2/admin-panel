
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

//OVERLAY part

//Fuction that remove class show in overlay
function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

//Function that close modal after click X
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

//Function that close modal after clicking background
document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

//Function that close modal after using Esc kay
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});

//Function that open one Pop Up and close others
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modalId) {
    modalId.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

//LOOP for clicked modal link
const modalLinks = document.querySelectorAll('.modal-execute');
for (let link of modalLinks) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const modal = '.' + link.getAttribute('id');
    openModal(modal);
  });
}

