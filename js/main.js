/* ============================================================
   MARCIN SUCHARZEWSKI PORTFOLIO – JAVASCRIPT
   ============================================================ */

'use strict';

/* ---- Navbar scroll effect ---- */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ---- Mobile navigation toggle ---- */
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

if (navToggle && navLinks && navbar) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ---- Active nav link on scroll ---- */
const sections = document.querySelectorAll('section[id]');
const navLinksList = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  const scrollPos = window.scrollY + 120;
  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      navLinksList.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });

/* ---- Typewriter effect ---- */
const phrases = [
  'Data Analyst',
  'Power BI Enthusiast',
  'Python Learner',
  'Data Science Explorer',
  'Machine Learning Enthusiast',
  'SQL Practitioner'
];

const typedEl = document.getElementById('typed-text');
let phraseIndex  = 0;
let charIndex    = 0;
let isDeleting   = false;
let typeTimeout;

function typeWriter() {
  const current = phrases[phraseIndex];

  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 60 : 110;

  if (!isDeleting && charIndex === current.length) {
    delay = 2000; // pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  }

  typeTimeout = setTimeout(typeWriter, delay);
}

// Start after initial hero animation completes
if (typedEl) {
  setTimeout(typeWriter, 800);
}

/* ---- Scroll reveal (Intersection Observer) ---- */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);

revealElements.forEach(el => revealObserver.observe(el));

/* ---- Smooth-scroll polyfill for older browsers ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ---- Count-up animation for stat numbers ---- */
function countUp(el, target, duration = 1500) {
  const isFloat = target.toString().includes('.');
  const start   = 0;
  const step    = target / (duration / 16);
  let   current = start;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = isFloat
      ? current.toFixed(0)
      : Math.floor(current);
  }, 16);
}

// Observe stat cards for count-up
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el   = entry.target;
        const text = el.textContent;
        const num  = parseFloat(text.replace(/[^0-9.]/g, ''));
        const suffix = text.replace(/[0-9.]/g, '');

        countUp(el, num, 1200);

        // Restore suffix after animation
        setTimeout(() => {
          el.innerHTML = Math.round(num) + '<span class="accent">' + suffix.trim() + '</span>';
        }, 1300);

        statsObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);

statNumbers.forEach(el => statsObserver.observe(el));

/* ---- Project cards stagger animation ---- */
const projectCards = document.querySelectorAll('.project-card');

const cardsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80);
        cardsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

projectCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  cardsObserver.observe(card);
});

/* ---- Skill category stagger ---- */
const skillCategories = document.querySelectorAll('.skill-category');

const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 100);
        skillsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

skillCategories.forEach(cat => {
  cat.style.opacity = '0';
  cat.style.transform = 'translateY(20px)';
  cat.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  skillsObserver.observe(cat);
});

/* ---- Add active style to nav links ---- */
const style = document.createElement('style');
style.textContent = `.nav-link.active { color: var(--accent) !important; }`;
document.head.appendChild(style);
