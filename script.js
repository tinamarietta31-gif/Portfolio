/* ============================================
   PROFESSIONAL PORTFOLIO - MINIMAL SCRIPTS
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    function toggleMenu() {
        const isActive = hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggleMenu);

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = navbar.offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const top = section.offsetTop - navbar.offsetHeight - 100;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);
            
            if (scrollY >= top && scrollY < top + height && link) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }

    // Navbar scroll effect
    function handleScroll() {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        updateActiveLink();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Simple fade-in animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.stat-card, .timeline-item, .skill-category, .project-card, .achievement-card, .contact-card, .reference-card').forEach(el => {
        el.classList.add('animate-ready');
        observer.observe(el);
    });

    // Contact form
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            btn.textContent = 'Sending...';
            btn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you! Your message has been sent.');
                this.reset();
                btn.textContent = 'Send Message';
                btn.disabled = false;
            }, 1000);
        });
    }
});
