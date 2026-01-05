document.addEventListener('DOMContentLoaded', () => {
    // Gallery Image Configuration
    // Note: This list comes from the original file manual list.
    const galleryImages = [
        '1.jpeg', '2.jpeg', '3.jpeg', '4.png', '5.jpg', '6.JPG', '6.png', '8.JPG',
        '10.jpeg', '11.jpeg', '12.jpeg', '13.jpeg', '14.jpeg', '15.jpeg', '16.jpeg',
        '17.jpeg', '18.jpeg', '19.jpeg', '98.png',
        '20 (1).jpeg', '20 (2).jpeg', '20 (3).jpeg', '20 (4).jpeg', '20 (5).jpeg',
        '20 (6).jpeg', '20 (7).jpeg', '20 (8).jpeg', '20 (9).jpeg', '20 (10).jpeg',
        '20 (11).jpeg', '20 (12).jpeg', '20 (13).jpeg', '20 (14).jpeg', '20 (15).jpeg',
        '20 (16).jpeg', '20 (17).jpeg', '20 (18).jpeg', '20 (19).jpeg', '20 (20).jpeg',
        '20 (21).jpeg'
    ];

    // Shuffle Function
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Initialize Gallery
    const galleryContainer = document.getElementById('premiumGalleryGrid');
    if (galleryContainer) {
        const shuffledImages = shuffleArray(galleryImages);

        shuffledImages.forEach((imageName, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            // Add staggered animation delay
            item.style.animationDelay = `${index * 50}ms`;

            // Randomly assign slight aspect ratio variations if needed, or keeping standardized
            // For now, standard square or 4:3 is safer without knowing image dimensions

            item.innerHTML = `
                <img src="data/gallery/${imageName}" alt="Gallery Photo ${index + 1}" loading="lazy">
                <div class="item-overlay">
                    <div class="overlay-content">
                        <h3>Kisan Pro Lab</h3>
                        <p>Field Research & Innovation</p>
                    </div>
                </div>
            `;

            // Lightbox Trigger
            item.addEventListener('click', () => openLightbox(`data/gallery/${imageName}`));

            galleryContainer.appendChild(item);
        });
    }

    // Lightbox Logic
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="" class="lightbox-img" alt="Full Screen View">
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => { lightboxImg.src = ''; }, 300);
    }

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Esc key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
    });

    // Filtering (Demo functionality)
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // In a real app, we'd filter based on categories. 
            // For this demo, we'll shuffle again to simulate change or just animate
            const items = document.querySelectorAll('.gallery-item');
            items.forEach(item => {
                item.style.opacity = '0.5';
                setTimeout(() => item.style.opacity = '1', 300);
            });
        });
    });

    // Particle effect interactivity
    const hero = document.querySelector('.gallery-hero');
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const particles = document.querySelector('.hero-particles');
            if (particles) {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                particles.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
            }
        });
    }
});
