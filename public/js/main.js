// Mobile menu toggle
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navMenu').classList.remove('active');
    });
});

// Animated stat counters
function animateStats() {
    document.querySelectorAll('.stat-num').forEach(el => {
        const target = parseInt(el.dataset.target);
        let current = 0;
        const increment = target / 60;
        const update = () => {
            current += increment;
            if (current < target) {
                el.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(update);
            } else {
                el.textContent = target.toLocaleString();
            }
        };
        update();
    });
}

// Trigger stats when hero is visible
window.addEventListener('load', () => {
    setTimeout(animateStats, 500);
});

// Scroll fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Contact form handler
function handleSubmit(event) {
    event.preventDefault();
    document.getElementById('formSuccess').style.display = 'block';
    event.target.reset();
    setTimeout(() => {
        document.getElementById('formSuccess').style.display = 'none';
    }, 5000);
}
