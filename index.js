document.addEventListener('scroll',() => {
    const navbar = document.querySelector('.navigation');
    if(window.scrollY > 0) {
        navbar.classList.add('scrolled');
    }
    else{
        navbar.classList.remove('scrolled');
    }
})