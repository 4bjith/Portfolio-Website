/**
 * AT ABHIJITH — MODERN MINIMALIST MONOCHROME PORTFOLIO
 * Modular Vanilla JavaScript Interactions & Logic
 */

// ==========================================================================
// 1. DATA STORE: DETAILED PROJECT CASE STUDIES
// ==========================================================================
const PROJECT_DATA = {
    'trendquick': {
        title: 'TrendQuick — Modern E-Commerce Platform',
        category: 'Full Stack E-Commerce • MERN',
        overview: 'TrendQuick is a high-performance e-commerce platform engineered with React 18, Vite, and Tailwind CSS, backed by a companion Node/Express REST API. It delivers a fast, intuitive shopping experience with dynamic catalog browsing, instant client-side search, persistent cart state via Zustand, and wishlist management.',
        challenge: 'Creating a responsive, distraction-free shopping interface that handles dynamic multi-parameter filtering, real-time cart state synchronization across page reloads, and fast catalog discovery without layout shifts.',
        solution: 'Built a modular component architecture in React 18 with Zustand for lightweight state management and persistent session storage, integrated with Axios and React Query for caching, backed by indexed MongoDB collections and Express REST endpoints.',
        features: [
            'Dynamic category, price, and tag-based product filtering',
            'Live client-side product search and instant catalog auto-filtering',
            'Zustand-powered persistent cart and wishlist state handling',
            'Mobile-first responsive product grid with quick view and rating indicators',
            'Structured RESTful API handling products, categories, user profiles, and orders'
        ],
        stack: ['React 18', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Zustand', 'React Query', 'REST API'],
        liveUrl: 'https://trend-quick.vercel.app/',
        liveLabel: 'Visit Live Store',
        githubUrl: 'https://github.com/4bjith/TrendQuick',
        githubLabel: 'View Repository'
    },
    'voyago': {
        title: 'Voyago — Urban Mobility & Driver Operations Platform',
        category: 'Real-Time Mobility & WebSockets • MERN',
        overview: 'Voyago is an urban mobility ecosystem connecting passengers and drivers. It combines an interactive map-driven ride-booking web application for riders with a dedicated operations console for drivers to manage trip requests, availability, and earnings.',
        challenge: 'Coordinating bidirectional communication between passenger ride requests and driver dispatch availability, while providing interactive waypoint selection and responsive distance fare calculation.',
        solution: 'Developed an interactive map flow using Leaflet Maps for pickup/drop-off waypoint routing, modular React state management for vehicle tiers, real-time dispatch events using Socket.IO, and secure RESTful endpoints in Node/Express.',
        features: [
            'Interactive Leaflet map routing with pickup and drop-off waypoint selection',
            'Dynamic distance fare calculation across vehicle tiers (Voyago Go, Comfort, Lux)',
            'Real-time ride booking request dispatch and trip state management with Socket.IO',
            'Driver Operations Console featuring real-time trip queue and availability controls',
            'Historical trip logs, fare breakdowns, and user profile authentication'
        ],
        stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Leaflet Maps', 'Socket.IO', 'Tailwind CSS', 'REST API'],
        liveUrl: 'https://voyago-sandy.vercel.app/',
        liveLabel: 'Passenger App Demo',
        secondaryLiveUrl: 'https://uber-driver-sigma.vercel.app/',
        secondaryLiveLabel: 'Driver Console Demo',
        githubUrl: 'https://github.com/4bjith/Voyago',
        githubLabel: 'Passenger Code',
        secondaryGithubUrl: 'https://github.com/4bjith/Uber-Driver',
        secondaryGithubLabel: 'Driver Code'
    },
    'multi-merchant': {
        title: 'Genmise — Multi-Merchant E-Commerce Platform',
        category: 'Full Stack & Multi-Tenant Architecture',
        overview: 'Genmise is a centralized multi-merchant e-commerce platform that empowers independent merchants to establish and run online stores through a unified system. Features a full-stack monorepo foundation with an ongoing Next.js frontend migration.',
        challenge: 'Architecting a multi-tenant system that cleanly separates merchant store configurations, product catalogs, categories, and orders, while rendering responsive storefront templates for customers.',
        solution: 'Engineered a modular architecture with Express and MongoDB handling merchant authorization, store tenancy, and inventory models. Built pluggable storefront templates (Templates/template01) and initiated a Next.js App Router frontend migration for enhanced performance and SEO.',
        features: [
            'Merchant onboarding, store creation, and multi-tenant management',
            'Centralized merchant dashboard for products, categories, and order pipelines',
            'Modular storefront templates providing customizable customer-facing shopping experiences',
            'Customer shopping workflows with product discovery, cart state, and order summary',
            'Modern Next.js App Router frontend migration underway for server-side rendering and performance'
        ],
        stack: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'TypeScript', 'REST API'],
        liveUrl: 'https://genmise.vercel.app/',
        liveLabel: 'Visit Live Platform',
        githubUrl: 'https://github.com/4bjith/GroupProject-OnlineStore',
        githubLabel: 'Full-Stack Repository',
        secondaryGithubUrl: 'https://github.com/4bjith/multi-merchant-store-frontend',
        secondaryGithubLabel: 'Next.js Frontend Repo'
    },
    'texly': {
        title: 'Texly — Real-Time Messaging Application',
        category: 'Mobile & Real-Time WebSockets • Prototype',
        overview: 'Texly is a real-time messaging application prototype featuring a cross-platform mobile application in React Native / Expo and a backend service powered by Express.js, Socket.IO, and MySQL. It explores low-latency bi-directional chat and relational data persistence.',
        challenge: 'Maintaining real-time message delivery and user presence state across mobile clients while ensuring structured conversation history persistence in a relational schema.',
        solution: 'Implemented an event-driven WebSocket layer with Socket.IO on Node.js, secured by JWT authentication middleware. Designed a normalized MySQL database schema for user accounts, conversation rooms, and persistent message records.',
        features: [
            'Real-time bi-directional messaging powered by Socket.IO',
            'JWT-based user authentication and protected REST API endpoints',
            'Conversation lists, active online presence indicators, and message delivery states',
            'Structured MySQL relational database migrations and persistent message storage',
            'Cross-platform mobile client engineered with React Native, Expo, and TypeScript'
        ],
        stack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express.js', 'Socket.IO', 'MySQL', 'JWT'],
        status: 'In Progress / Prototype',
        liveUrl: null,
        githubUrl: 'https://github.com/4bjith/Texly-expo-app',
        githubLabel: 'Mobile Client Code',
        secondaryGithubUrl: 'https://github.com/4bjith/ChatApp-server',
        secondaryGithubLabel: 'Server API Code'
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
    const filterTabs = document.querySelectorAll('.projects-filter-bar .projects-tab-group .btn-project-tab');
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
        const statusHtml = data.status ? `
            <div style="margin-bottom: 16px;">
                <span class="project-card-badge" style="position: static; display: inline-block;">${data.status}</span>
            </div>
        ` : '';

        modalBody.innerHTML = `
            ${statusHtml}
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
                    <span>${data.liveLabel || 'Visit Live Site'}</span>
                    <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
                </a>
            `;
        }
        if (data.secondaryLiveUrl) {
            actionsHtml += `
                <a href="${data.secondaryLiveUrl}" target="_blank" rel="noopener noreferrer" class="btn-project-tab" style="padding: 10px 20px;">
                    <span>${data.secondaryLiveLabel || 'Secondary Demo'}</span>
                    <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
                </a>
            `;
        }
        if (data.githubUrl) {
            actionsHtml += `
                <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-project-tab" style="padding: 10px 20px;">
                    <span>${data.githubLabel || 'View Repository'}</span>
                    <i class="fab fa-github" aria-hidden="true"></i>
                </a>
            `;
        }
        if (data.secondaryGithubUrl) {
            actionsHtml += `
                <a href="${data.secondaryGithubUrl}" target="_blank" rel="noopener noreferrer" class="btn-project-tab" style="padding: 10px 20px;">
                    <span>${data.secondaryGithubLabel || 'Secondary Repo'}</span>
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
