// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme based on system preference
document.body.setAttribute('data-theme', prefersDarkScheme.matches ? 'dark' : 'light');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
});

// Form Submission
document.querySelector('.submit-button').addEventListener('click',() => {
    if (!document.querySelector('.nom').value || !document.querySelector('.age').value
     || !document.querySelector('.niveau').value|| !document.querySelector('.passport').value || 
      ! document.querySelector('.numero').value  || !document.querySelector('.filiere').value
) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
    }
    try {
        const response = fetch('https://chinavipbackend.onrender.com/articles', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
             Name: document.querySelector('.nom').value,
             Note: document.querySelector('.Note').value,
             Passport:  document.querySelector('.passport').value,
             Age:  document.querySelector('.age').value,
             Niveau:  document.querySelector('.niveau').value,
             filiere: document.querySelector('.filiere').value,
             Numero:  document.querySelector('.numero').value,
            
             
        }),
      });
  
      alert('Votre inscription est confirmée!');
      
    } catch (error) {
      console.error('Error:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  });

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href !== '#') {
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to bottom navigation
const bottomNavLinks = document.querySelectorAll('.bottom-nav a');
bottomNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        bottomNavLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});
