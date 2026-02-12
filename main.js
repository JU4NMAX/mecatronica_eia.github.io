// JavaScript opcional para interactividad adicional
// Por ahora el sitio funciona completamente con HTML y CSS

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Solo para enlaces internos dentro de la misma página
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
});
