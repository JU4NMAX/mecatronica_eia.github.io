// Agregar al final de js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para navegación
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Scroll Reveal Animation (opcional)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Aplicar a elementos que quieras revelar al scroll
    // (Opcional - puedes agregar clase .scroll-reveal a elementos en HTML)
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
});
