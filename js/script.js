// Smooth scroll for nav links
document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form alert
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out, I will get back to you soon!');
    this.reset();
});

// Dark mode toggle
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') 
        ? '☀️ Light Mode' 
        : '🌓 Dark Mode';
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode-toggle').textContent = '☀️ Light Mode';
}

// Fetch business quotes from API
async function fetchTestimonials() {
    try {
        const response = await fetch('https:type.fit/api/quotes');
        const quotes = await response.json();
        
        const businessQuotes = quotes
            .filter(quote => {
                const quoteText = quote.text.toLowerCase();
                return quoteText.includes('business') || 
                       quoteText.includes('success') || 
                       quoteText.includes('work');
            })
            .slice(0, 4)
            .map(quote => `
                <div class="col-md-5 mb-4">
                    <div class="testimonial-card">
                        <p>"${quote.text}"</p>
                        <span>- ${quote.author || 'Business Leader'}</span>
                    </div>
                </div>
            `).join('');
        
        document.getElementById('testimonials-container').innerHTML += businessQuotes;
        
    } catch (error) {
        console.error('Error fetching testimonials:', error);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', fetchTestimonials);