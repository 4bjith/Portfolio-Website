/**
 * AT ABHIJITH — MODERN MINIMALIST MONOCHROME PORTFOLIO
 * Modular Vanilla JavaScript Interactions & Logic
 */

// ==========================================================================
// 1. DATA STORE: DETAILED PROJECT CASE STUDIES
// ==========================================================================
const PROJECT_DATA = {
    'trendquik': {
        title: 'TrendQuik — Modern E-Commerce Platform',
        category: 'Full Stack E-Commerce • MERN',
        overview: 'TrendQuik is a high-performance e-commerce platform engineered with the MERN stack. It delivers a fast, intuitive shopping experience with dynamic catalog browsing, instant search, responsive cart workflows, and streamlined checkout.',
        challenge: 'Creating a snappy, responsive shopping interface that handles complex product filtering, real-time cart calculations, and responsive multi-device navigation without performance degradation.',
        solution: 'Built a modular component structure in React with utility CSS styling, backed by structured Express REST APIs and indexed MongoDB collections for fast catalog queries.',
        features: [
            'Dynamic category, price, and tag-based filtering',
            'Live client-side product search and auto-complete',
            'Interactive cart state management with persistent session storage',
            'Mobile-first responsive product gallery and order summary flow',
            'RESTful API architecture handling products, categories, and orders'
        ],
        stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST API'],
        liveUrl: 'https://trend-quick.vercel.app/',
        githubUrl: 'https://github.com/4bjith/E-Commerce'
    },
    'voyago': {
        title: 'Voyago — Ride-Sharing Web Application',
        category: 'Mobility & Real-Time Booking',
        overview: 'Voyago is an urban mobility platform inspired by ride-sharing services like Uber. It connects riders with transportation options through interactive maps, destination selection, and automated fare calculation.',
        challenge: 'Designing a smooth ride booking workflow with location selection, dynamic fare estimation based on transit parameters, and clean rider state management.',
        solution: 'Developed an intuitive map-driven user flow with Leaflet integration, modular React state for transit parameters, and secure server-side logic in Express.',
        features: [
            'Interactive map integration for pickup and drop-off selection',
            'Dynamic fare calculation based on distance and vehicle category',
            'Real-time ride booking request workflow and trip review',
            'User profile and authentication state handling',
            'Clean, modern typography-driven UI tailored for quick mobile and desktop bookings'
        ],
        stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Leaflet Maps', 'REST API'],
        liveUrl: null,
        githubUrl: 'https://github.com/4bjith/Uber-frontend'
    },
    'voyago-driver': {
        title: 'Voyago Driver — Operations Dashboard',
        category: 'Operations & Fleet Analytics',
        overview: 'A comprehensive operations portal for drivers in the Voyago ecosystem. Enables drivers to monitor assigned rides, manage real-time availability, and analyze daily and weekly earnings through data visualization.',
        challenge: 'Presenting dense operational metrics, trip histories, and active request statuses in an accessible, distraction-free dashboard.',
        solution: 'Engineered an analytics dashboard utilizing responsive data cards, visual trend charts with Chart.js, and immediate status toggles for driver online/offline availability.',
        features: [
            'Live trip dispatch feed with acceptance and completion controls',
            'Interactive earnings visualizer and performance breakdown with Chart.js',
            'Driver online / offline availability switch with immediate feedback',
            'Historical ride logs with fare breakdowns and trip metrics',
            'Optimized for rapid tablet and mobile usage during transit'
        ],
        stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'Tailwind CSS'],
        liveUrl: null,
        githubUrl: 'https://github.com/4bjith/Uber-Driver'
    }
};

// ==========================================================================
// 2. DOM INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCustomCursor();
    initNavigation();
    initScrollReveal();
    initProjectsFilter();
    initSkillsFilter();
    initServicesAccordion();
    initCaseStudyModal();
    initClipboard();
    initContactForm();
    initBackToTop();
});

// ==========================================================================
// 3. THEME MANAGEMENT (DARK / LIGHT)
// ==========================================================================
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    if (!themeToggleBtn || !themeIcon) return;

    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('abhijith-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Default to dark mode unless explicitly saved as light
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.className = 'fas fa-sun';
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
    } else {
        document.body.classList.remove('light-mode');
        themeIcon.className = 'fas fa-moon';
        themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const activeIsLight = document.body.classList.contains('light-mode');
        
        if (activeIsLight) {
            themeIcon.className = 'fas fa-sun';
            themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
            localStorage.setItem('abhijith-theme', 'light');
        } else {
            themeIcon.className = 'fas fa-moon';
            themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
            localStorage.setItem('abhijith-theme', 'dark');
        }
    });
}

// ==========================================================================
// 4. CUSTOM MINIMAL CURSOR (DESKTOP)
// ==========================================================================
function initCustomCursor() {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isMoving = false;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        if (!isMoving) {
            isMoving = true;
            renderCursor();
        }
    });

    function renderCursor() {
        ringX += (mouseX - ringX) * 0.2;
        ringY += (mouseY - ringY) * 0.2;
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        requestAnimationFrame(renderCursor);
    }

    // Hover state over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .editorial-project-card, .service-accordion-item, .skill-card, .social-pill-link');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => ring.classList.remove('cursor-hover'));
    });
}

// ==========================================================================
// 5. NAVIGATION & SCROLL TRACKING
// ==========================================================================
function initNavigation() {
    const header = document.getElementById('site-header');
    const hamburger = document.getElementById('nav-hamburger');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    const navLinks = document.querySelectorAll('.nav-link');
    const drawerLinks = document.querySelectorAll('.drawer-nav-item, .drawer-close-trigger');

    // Sticky Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove('nav-scrolled');
        }
    }, { passive: true });

    // Mobile Drawer Toggle
    const toggleDrawer = (open) => {
        const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
        if (isOpen) {
            drawer.classList.add('open');
            backdrop.classList.add('active');
            hamburger.setAttribute('aria-expanded', 'true');
            hamburger.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
            document.body.style.overflow = 'hidden';
        } else {
            drawer.classList.remove('open');
            backdrop.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
            document.body.style.overflow = '';
        }
    };

    hamburger.addEventListener('click', () => toggleDrawer());
    backdrop.addEventListener('click', () => toggleDrawer(false));

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => toggleDrawer(false));
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
            toggleDrawer(false);
        }
    });

    // Active Nav Highlight on Scroll
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.25,
        rootMargin: '-60px 0px -40% 0px'
    });

    sections.forEach(section => observer.observe(section));
}

// ==========================================================================
// 6. INTERSECTION OBSERVER SCROLL REVEAL
// ==========================================================================
function initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-revealed'));
        return;
    }

    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ==========================================================================
// 7. PROJECTS CATEGORY FILTER
// ==========================================================================
function initProjectsFilter() {
    const filterTabs = document.querySelectorAll('.btn-project-tab');
    const projectCards = document.querySelectorAll('.editorial-project-card');

    if (!filterTabs.length || !projectCards.length) return;

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.getAttribute('data-project-filter');

            projectCards.forEach(card => {
                const cat = card.getAttribute('data-cat') || '';
                if (filter === 'all' || cat.includes(filter)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 40);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(12px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 200);
                }
            });
        });
    });
}

// ==========================================================================
// 8. SKILLS CATEGORY FILTER
// ==========================================================================
function initSkillsFilter() {
    const filterButtons = document.querySelectorAll('#skills .btn-project-tab');
    const skillCards = document.querySelectorAll('.skill-card');

    if (!filterButtons.length || !skillCards.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            skillCards.forEach(card => {
                const categories = (card.getAttribute('data-category') || '').split(/\s+/);
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 40);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 200);
                }
            });
        });
    });
}

// ==========================================================================
// 9. SERVICES ACCORDION (MATCHING REFERENCE IMAGE 3)
// ==========================================================================
function initServicesAccordion() {
    const items = document.querySelectorAll('.service-accordion-item');

    items.forEach(item => {
        const toggle = () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            items.forEach(i => {
                i.classList.remove('active');
                i.setAttribute('aria-expanded', 'false');
            });

            // Toggle selected item
            if (!isActive) {
                item.classList.add('active');
                item.setAttribute('aria-expanded', 'true');
            }
        };

        item.addEventListener('click', toggle);
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle();
            }
        });
    });
}

// ==========================================================================
// 10. CASE STUDY MODAL DIALOG
// ==========================================================================
function initCaseStudyModal() {
    const modal = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalCategory = document.getElementById('modal-category');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalFooter = document.getElementById('modal-footer');

    if (!modal || !modalTitle || !modalBody || !modalFooter) return;

    const openModal = (projectId) => {
        const data = PROJECT_DATA[projectId];
        if (!data) return;

        modalCategory.textContent = data.category;
        modalTitle.textContent = data.title;

        const featuresHtml = data.features.map(f => `<li>${f}</li>`).join('');
        const stackHtml = data.stack.map(s => `<span class="project-pill-tag">${s}</span>`).join('');

        modalBody.innerHTML = `
            <div>
                <h4 class="modal-section-title">Overview</h4>
                <p>${data.overview}</p>
            </div>
            <div>
                <h4 class="modal-section-title">Engineering Highlights</h4>
                <ul class="modal-features-list">
                    ${featuresHtml}
                </ul>
            </div>
            <div>
                <h4 class="modal-section-title">Technology Stack</h4>
                <div class="editorial-pill-row" style="margin-top: 8px;">
                    ${stackHtml}
                </div>
            </div>
        `;

        let actionsHtml = '';
        if (data.liveUrl) {
            actionsHtml += `
                <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-hero-cta">
                    <span>Visit Live Site</span>
                    <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
                </a>
            `;
        }
        if (data.githubUrl) {
            actionsHtml += `
                <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-project-tab" style="padding: 10px 22px;">
                    <span>View Repository</span>
                    <i class="fab fa-github" aria-hidden="true"></i>
                </a>
            `;
        }
        modalFooter.innerHTML = actionsHtml;

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        modalCloseBtn.focus();
    };

    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('.editorial-project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const projectId = card.getAttribute('data-project');
            if (projectId) {
                e.preventDefault();
                openModal(projectId);
            }
        });
    });

    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ==========================================================================
// 11. COPY EMAIL & TOAST NOTIFICATION
// ==========================================================================
function showToast(message = 'Email copied to clipboard!') {
    const toast = document.getElementById('toast-notice');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2600);
}

function initClipboard() {
    const copyBtn = document.getElementById('btn-copy-email');
    const heroEmailBtn = document.getElementById('hero-email-pill');
    const emailText = document.getElementById('copy-email-text');

    const copyHandler = async () => {
        const text = 'abhijithatzz@gmail.com';
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
            } else {
                const tempInput = document.createElement('textarea');
                tempInput.value = text;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
            }
            showToast('Email address copied to clipboard!');
        } catch (err) {
            console.error('Clipboard copy failed:', err);
            showToast(`Contact: ${text}`);
        }
    };

    if (copyBtn) copyBtn.addEventListener('click', copyHandler);
    if (heroEmailBtn) heroEmailBtn.addEventListener('click', copyHandler);
}

// ==========================================================================
// 12. CONTACT FORM HANDLER
// ==========================================================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('btn-submit-form');

    if (!form || !feedback || !submitBtn) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const messageInput = document.getElementById('contact-message');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            feedback.className = 'form-feedback';
            feedback.style.display = 'block';
            feedback.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
            feedback.style.borderColor = 'rgba(239, 68, 68, 0.3)';
            feedback.style.color = '#ef4444';
            feedback.textContent = 'Please fill out all required fields before sending.';
            return;
        }

        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin" aria-hidden="true"></i><span>Sending...</span>';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;

            feedback.className = 'form-feedback success';
            feedback.style.display = 'block';
            feedback.textContent = `Thank you, ${name}! Your message has been sent. I will get back to you shortly at ${email}.`;
            form.reset();
            showToast('Message sent successfully!');

            setTimeout(() => {
                feedback.style.display = 'none';
            }, 6000);
        }, 800);
    });
}

// ==========================================================================
// 13. BACK TO TOP SCROLL
// ==========================================================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('btn-back-to-top');
    if (!backToTopBtn) return;

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
