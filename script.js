// ========== HAMBURGER MENU =========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ========== GESTION DU FORMULAIRE DE CONTACT =========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const nom = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const telephone = contactForm.querySelector('input[type="tel"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Créer le lien mailto
        const destinataire = 'contact@maisongui​llou.fr';
        const sujet = encodeURIComponent('Nouvelle commande de ' + nom);
        const corps = encodeURIComponent(
            `Nom: ${nom}\n` +
            `Email: ${email}\n` +
            `Téléphone: ${telephone}\n` +
            `Message/Commande:\n${message}`
        );
        
        const mailtoLink = `mailto:${destinataire}?subject=${sujet}&body=${corps}`;
        
        // Ouvrir le client email par défaut
        window.location.href = mailtoLink;
        
        // Afficher un message de confirmation
        alert('Votre message a été envoyé! Notre équipe vous contactera rapidement.');
        
        // Réinitialiser le formulaire
        contactForm.reset();
    });
}

// ========== ANIMATIONS AU SCROLL =========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer tous les cartes produit
document.querySelectorAll('.produit-card').forEach(card => {
    observer.observe(card);
});

// Observer les sections
document.querySelectorAll('.categorie').forEach(section => {
    observer.observe(section);
});

// ========== SCROLL SMOOTH VERS LES SECTIONS =========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========== ACTIVE LINK IN NAVBAR =========
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--color-primary)';
        } else {
            link.style.color = '';
        }
    });
});

// ========== ANIMATIONS ÉLÉMENTS À LA VISITE =========
window.addEventListener('load', () => {
    // Animer le hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
});