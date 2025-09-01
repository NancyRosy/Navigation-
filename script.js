const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const contactForm = document.getElementById('contact-form');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

// Menu responsive
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Validation formulaire
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  errorMessage.style.display = 'none';
  successMessage.style.display = 'none';

  if (nom === '' || email === '' || message === '') {
    errorMessage.textContent = 'Veuillez remplir tous les champs.';
    errorMessage.style.display = 'block';
    return;
  }
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email))
  
    { errorMessage.textContent = 'Adresse email invalide.';
    errorMessage.style.display = 'block';
    return;
  }

  // Si tout est bon
  successMessage.textContent = 'Message envoyé avec succès !';
  successMessage.style.display = 'block';
  contactForm.reset();
});