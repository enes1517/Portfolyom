// ===== TYPEWRITER EFFECT =====
const roles = [
    'Software Developer',
    'Microservices Architect',
    '.NET Backend Developer',
    'Event-Driven Systems Enthusiast',
    'Clean Architecture Advocate'
];


let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleText = document.getElementById('roleText');

function typeWriter() {
    if (!roleText) return;
    const current = roles[roleIndex];

    if (!isDeleting) {
        roleText.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000);
            return;
        }
    } else {
        roleText.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(typeWriter, isDeleting ? 60 : 100);
}

setTimeout(typeWriter, 500);

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 1500;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = Math.floor(current);
    }, 16);
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.id;
        if (scrollY >= top && scrollY < bottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===== MOBILE MENU =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinksEl = document.getElementById('navLinks');

if (mobileMenuBtn && navLinksEl) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinksEl.classList.toggle('open');
    });

    navLinksEl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinksEl.classList.remove('open');
        });
    });
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navH = 72;
            const y = target.getBoundingClientRect().top + window.scrollY - navH;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});

// ===== INTERSECTION OBSERVER =====
let countersAnimated = false;
let barsAnimated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate stat counters
            if (!countersAnimated && entry.target.closest('#hero')) {
                countersAnimated = true;
                document.querySelectorAll('.stat-num').forEach(el => {
                    setTimeout(() => animateCounter(el), 300);
                });
            }
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '-50px 0px'
});

// Animate all fade-in elements
document.querySelectorAll('.fade-in, .fade-left, .fade-right').forEach(el => {
    observer.observe(el);
});

// Also observe sections for stat animation
const heroSection = document.querySelector('#hero');
if (heroSection) observer.observe(heroSection);

// ===== LANGUAGE BARS ANIMATION =====
const barsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !barsAnimated) {
            barsAnimated = true;
            document.querySelectorAll('.lang-bar-fill').forEach(bar => {
                const width = bar.dataset.width;
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 200);
            });
        }
    });
}, { threshold: 0.3 });

const langBars = document.querySelector('.lang-bars');
if (langBars) barsObserver.observe(langBars);

// ===== HERO STATS OBSERVER =====
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
            countersAnimated = true;
            document.querySelectorAll('.stat-num').forEach(el => {
                setTimeout(() => animateCounter(el), 300);
            });
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// ===== PROJECT FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card, .featured-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        let visibleCount = 0;

        projectCards.forEach(card => {
            const lang = card.dataset.lang;
            const show = filter === 'all' || lang === filter;

            if (show) {
                card.classList.remove('hidden');
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                visibleCount++;
                setTimeout(() => {
                    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50 + (visibleCount * 40));
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ===== ADD FADE ANIMATIONS TO ELEMENTS =====
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes
    const animElements = [
        { selector: '.section-header', cls: 'fade-in' },
        { selector: '.about-text', cls: 'fade-left' },
        { selector: '.about-code', cls: 'fade-right' },
        { selector: '.skill-category', cls: 'fade-in' },
        { selector: '.featured-card', cls: 'fade-in' },
        { selector: '.project-card', cls: 'fade-in' },
        { selector: '.contact-info', cls: 'fade-left' },
        { selector: '.contact-message', cls: 'fade-right' },
        { selector: '.highlight-item', cls: 'fade-in' },
    ];

    animElements.forEach(({ selector, cls }) => {
        document.querySelectorAll(selector).forEach((el, i) => {
            el.classList.add(cls);
            el.style.transitionDelay = `${i * 0.1}s`;
            observer.observe(el);
        });
    });
});

// ===== CURSOR GLOW EFFECT =====
document.addEventListener('mousemove', (e) => {
    const glow = document.createElement('div');
    glow.style.cssText = `
        position: fixed;
        pointer-events: none;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(108,99,255,0.04) 0%, transparent 70%);
        left: ${e.clientX - 100}px;
        top: ${e.clientY - 100}px;
        z-index: 0;
        transition: opacity 0.5s;
    `;
    document.body.appendChild(glow);
    setTimeout(() => {
        glow.style.opacity = '0';
        setTimeout(() => glow.remove(), 500);
    }, 100);
});

// ===== FEATURED CARD HOVER EFFECT =====
document.querySelectorAll('.featured-card, .project-card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.style.zIndex = '10';
    });
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '';
    });
});

// ===== INITIAL HERO ANIMATION =====
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInLeft 0.8s ease both';
    }

    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        heroVisual.style.animation = 'fadeInRight 0.8s ease 0.2s both';
    }
});

console.log('%c👋 Hüseyin Enes Portfolio', 'color: #6c63ff; font-size: 18px; font-weight: bold;');
console.log('%c.NET & C# Developer | Kocaeli Üniversitesi', 'color: #8892b0; font-size: 12px;');
console.log('%cgithub.com/enes1517', 'color: #4ade80; font-size: 12px;');
