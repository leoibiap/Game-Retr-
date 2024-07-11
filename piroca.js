document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();  
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const redirectButtons = document.querySelectorAll('.redirect-button');
    redirectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');  
            window.location.href = url; 
        });
    });
});