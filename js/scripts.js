/* =====================================
   Kisan Pro Lab – Main Script
   ===================================== */

// ---------- MOBILE MENU TOGGLE ----------
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });
}

// ---------- SMOOTH SCROLL FOR INTERNAL LINKS ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) { // prevent '#' only
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ---------- SCROLL ANIMATIONS ----------
const scrollElements = document.querySelectorAll('.scroll-animate');

const elementInView = (el, offset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

const displayScrollElement = (el) => {
  el.classList.add('scrolled');
};

const hideScrollElement = (el) => {
  el.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 150)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// ---------- OPTIONAL: AUTO CLOSE MENU ON LINK CLICK ----------
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      menuToggle.classList.remove('open');
    }
  });
});

// ---------- CONSOLE GREETING ----------
console.log("%cWelcome to Kisan Pro Lab 🌱", "color: green; font-size: 16px;");
