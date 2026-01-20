// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:tinamarietta31@gmail.com?subject=${subject}&body=${body}`;
        
        showNotification('Opening your email client...', 'success');
        contactForm.reset();
    });
}

// Fixed Notification Function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.innerText = message;
    Object.assign(notification.style, {
        position: 'fixed', bottom: '20px', right: '20px', padding: '15px 25px',
        backgroundColor: '#00d4ff', color: '#0a0a0a', borderRadius: '10px',
        zIndex: '2000', fontWeight: 'bold'
    });
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}
