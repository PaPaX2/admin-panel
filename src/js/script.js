const clickListener = function(){
  const thisApp = this;
  thisApp.items = document.querySelectorAll('.jsBudget');
  console.log(thisApp.items);

  for (let item of thisApp.items){
    document.addEventListener('click', function(event){
      
      event.preventDefault();
      item.toggle('active');
    });
  }
};

clickListener();