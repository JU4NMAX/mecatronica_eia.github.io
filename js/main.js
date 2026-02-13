// ============================================
// ANIMACIONES DE SCROLL
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer para animaciones de entrada
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observar todos los elementos con clase fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    // ============================================
    // SMOOTH SCROLL PARA NAVEGACIÓN
    // ============================================
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Solo para enlaces internos (que empiezan con #)
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
    
    // ============================================
    // NAVBAR TRANSPARENTE AL SCROLL
    // ============================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Agregar sombra al hacer scroll
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ============================================
    // ANIMACIÓN DE PARTÍCULAS EN HERO
    // ============================================
    const particlesContainer = document.querySelector('.particles');
    
    if (particlesContainer) {
        // Crear partículas adicionales dinámicamente
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '3px';
            particle.style.height = '3px';
            particle.style.background = '#00D9FF';
            particle.style.borderRadius = '50%';
            particle.style.boxShadow = '0 0 8px #00D9FF';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animation = `particleFloat ${10 + Math.random() * 10}s linear infinite`;
            particle.style.animationDelay = Math.random() * 5 + 's';
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // ============================================
    // CONTADOR ANIMADO PARA STATS
    // ============================================
    function animateCounter(element, target, duration) {
        let current = 0;
        const increment = target / (duration / 16); // 60fps
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
    
    // Activar contadores cuando sean visibles
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const target = parseInt(entry.target.textContent);
                if (!isNaN(target)) {
                    entry.target.textContent = '0';
                    animateCounter(entry.target, target, 2000);
                }
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => statsObserver.observe(stat));
    
    // ============================================
    // LAZY LOADING PARA IMÁGENES
    // ============================================
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ============================================
    // ANIMACIÓN DE CIRCUITOS EN HERO
    // ============================================
    const circuitLines = document.querySelectorAll('.circuit-line');
    
    circuitLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.3}s`;
    });
    
    // ============================================
    // PARALLAX EFFECT EN SCROLL
    // ============================================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // Parallax para el hero visual
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        // Parallax para elementos decorativos
        const decorativeElements = document.querySelectorAll('.cta-background');
        decorativeElements.forEach(el => {
            const speed = 0.2;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // ============================================
    // TOOLTIP PARA TECNOLOGÍAS
    // ============================================
    const techTags = document.querySelectorAll('.tech-tags span, .project-tech span');
    
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // ============================================
    // ANIMACIÓN DE BADGES Y CÍRCULOS
    // ============================================
    const badges = document.querySelectorAll('.badge-circle, .pillar-icon');
    
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.5s ease';
        });
        
        badge.addEventListener('animationend', function() {
            this.style.animation = 'glowPulse 3s infinite';
        });
    });
    
    // ============================================
    // MENÚ MÓVIL (SI SE IMPLEMENTA)
    // ============================================
    const createMobileMenu = () => {
        const navMenu = document.querySelector('.nav-menu');
        const navContainer = document.querySelector('.nav-container');
        
        if (window.innerWidth <= 768 && !document.querySelector('.menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.innerHTML = '☰';
            menuToggle.style.cssText = `
                display: none;
                background: var(--gradient-electric);
                border: none;
                color: white;
                font-size: 1.5rem;
                padding: 0.5rem 1rem;
                border-radius: 8px;
                cursor: pointer;
            `;
            
            if (window.innerWidth <= 768) {
                menuToggle.style.display = 'block';
            }
            
            menuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                menuToggle.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
            });
            
            navContainer.insertBefore(menuToggle, navMenu);
        }
    };
    
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);
    
    // ============================================
    // PERFORMANCE: REDUCIR ANIMACIONES EN DISPOSITIVOS LENTOS
    // ============================================
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('*').forEach(el => {
            el.style.animation = 'none';
            el.style.transition = 'none';
        });
    }
    
    // ============================================
    // LOG DE INICIALIZACIÓN
    // ============================================
    console.log('✅ Mecatrónica EIA - Scripts cargados correctamente');
    console.log('🎨 Animaciones: Activas');
    console.log('🚀 Scroll suave: Activo');
    console.log('📱 Responsive: Optimizado');
});
