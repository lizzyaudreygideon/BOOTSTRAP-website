document.addEventListener('scroll',() => {
    const navbar = document.querySelector('.navigation');
    if(window.scrollY > 0) {
        navbar.classList.add('scrolled');
    }
    else{
        navbar.classList.remove('scrolled');
    }
})


document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('#menu a');
    var menu = document.getElementById('menu');
    
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        
        menu.style.display = 'none';

        window.scrollTo(0, 0);
       
        setTimeout(function() {
          menu.style.display = '';
        }, 5000);
      });
    });
  });