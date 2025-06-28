// Dark Mode Functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Initialize dark mode from localStorage
function initDarkMode() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDark);
    darkModeToggle.textContent = isDark ? '☀️ Light Mode' : '🌓 Dark Mode';
}

// Toggle dark mode
function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark);
    darkModeToggle.textContent = isDark ? '☀️ Light Mode' : '🌓 Dark Mode';
}

// Smooth scrolling for nav links
document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Event Listeners
document.addEventListener('DOMContentLoaded', initDarkMode);
darkModeToggle.addEventListener('click', toggleDarkMode);