// Three.js 3D Background
const initThreeJS = () => {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000; // Number of particles
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        // Spread particles in a large sphere/cloud
        posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0x00d2ff, // Primary color
        transparent: true,
        opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
    });

    // Animation Loop
    const animate = () => {
        requestAnimationFrame(animate);

        particlesMesh.rotation.y += 0.002;
        particlesMesh.rotation.x += 0.001;

        // Gentle parallax effect based on mouse
        particlesMesh.rotation.y += mouseX * 0.05;
        particlesMesh.rotation.x += mouseY * 0.05;

        renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

// Mobile Navigation
const initNav = () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle icon
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
};

// Contact Form
const initForm = () => {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    initNav();
    initForm();
    initThemeToggle();
    initTypewriter();
    initScrollReveal();
});

// ===========================
// Typewriter Animation
// ===========================
const initTypewriter = () => {
    const titleEl = document.getElementById('typewriter-title');
    const subEl = document.getElementById('typewriter-sub');
    const descEl = document.getElementById('typewriter-desc');

    if (!titleEl || !subEl || !descEl) return;

    const titleText = 'DEVELOPER';
    const subText = 'Full Stack Web Developer';
    const descText = 'Building pixel-perfect, engaging, and accessible digital experiences.';
    const speed = 70;   // ms per character
    const pause = 1800; // pause before moving to next line (ms)

    // Helper: type a string into an element character by character
    const typeText = (el, text, onDone, charSpeed = speed) => {
        el.innerHTML = '';
        let i = 0;
        const tick = () => {
            if (i < text.length) {
                // Wrap bold for "Full Stack" in the sub line
                el.textContent += text[i];
                i++;
                setTimeout(tick, charSpeed);
            } else {
                if (onDone) setTimeout(onDone, pause);
            }
        };
        tick();
    };

    // Special version that bolds "Full Stack " prefix
    const typeSubText = (el, onDone) => {
        el.innerHTML = '';
        const boldPart = 'Full Stack ';
        const plainPart = 'Web Developer';
        const fullText = boldPart + plainPart;
        let i = 0;
        const tick = () => {
            if (i < fullText.length) {
                const typed = fullText.slice(0, i + 1);
                const boldTyped = typed.slice(0, Math.min(i + 1, boldPart.length));
                const plainTyped = typed.slice(boldPart.length);
                el.innerHTML = `<b>${boldTyped}</b>${plainTyped}`;
                i++;
                setTimeout(tick, speed);
            } else {
                if (onDone) setTimeout(onDone, pause);
            }
        };
        tick();
    };

    // Chain: title → sub → desc, then loop title only (sub & desc stay)
    const startSequence = (loopTitle = false) => {
        if (!loopTitle) {
            // First run: type all three lines in sequence
            typeText(titleEl, titleText, () => {
                typeSubText(subEl, () => {
                    typeText(descEl, descText, () => {
                        loopTitleForever();
                    });
                });
            });
        } else {
            loopTitleForever();
        }
    };

    const loopTitleForever = () => {
        // Erase then retype title on loop
        let text = titleText;
        let i = text.length;
        const erase = () => {
            if (i > 0) {
                titleEl.textContent = text.slice(0, --i);
                setTimeout(erase, 45);
            } else {
                setTimeout(() => typeText(titleEl, text, () => loopTitleForever()), 400);
            }
        };
        setTimeout(erase, 2500);
    };

    startSequence(false);
};

// ===========================
// Scroll Reveal (Intersection Observer)
// ===========================
const initScrollReveal = () => {
    const elements = document.querySelectorAll('.scroll-reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once revealed, stop observing (keep visible)
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,   // trigger when 12% of element is visible
        rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => observer.observe(el));
};

// Theme Toggle (Dark / Light Mode)
const initThemeToggle = () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const icon = toggleBtn?.querySelector('i');
    if (!toggleBtn) return;

    // Load saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        // Swap icon
        if (isLight) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
        // Persist preference
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
};
