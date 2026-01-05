document.addEventListener('DOMContentLoaded', function () {
    // Number animation for stats
    const stats = document.querySelectorAll('.stat-number');

    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = Math.ceil(target / (duration / 16)); // 60fps

        let current = 0;

        const updateTimer = setInterval(() => {
            current += step;
            if (current >= target) {
                stat.textContent = target;
                if (target === 100) stat.textContent += '%';
                if (target === 24) stat.textContent = '24/7';
                clearInterval(updateTimer);
            } else {
                stat.textContent = current;
                if (target === 100) stat.textContent += '%';
            }
        }, 16);
    });

    // Parallax effect for hero
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.premium-projects-hero');
        const overlay = document.querySelector('.hero-gradient-overlay');

        if (hero) {
            hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
            overlay.style.opacity = 1 - (scrolled / 700);
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const projectCards = document.querySelectorAll('.premium-project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
        card.style.transitionDelay = `${index * 100}ms`;
        observer.observe(card);
    });

    // Particle effect interactivity
    const hero = document.querySelector('.premium-projects-hero');
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const particles = document.querySelector('.hero-particles');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            particles.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        });
    }
});
