document.addEventListener('scroll', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navButton = document.querySelector('.nav-button');
    const scrollPosition = window.scrollY;

    
    const triggerHeight = window.innerHeight * 0.9;

    if (scrollPosition >= triggerHeight) {
        navLinks.forEach(link => {
            link.classList.add('active');
        });
        navButton.classList.add('active');
    } else {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        navButton.classList.remove('active');
    }
});