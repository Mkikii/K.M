// Smooth scroll for nav links
document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70, // adjust for navbar height
        behavior: 'smooth'
      });
    }
  });
});

// Contact form alert
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out, I will get back to you soon!');
    form.reset();
  });
});