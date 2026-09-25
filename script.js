document.addEventListener('DOMContentLoaded', () => {
    const termsDialog = document.querySelector('#terms-dialog');
    const termsLinks = document.querySelectorAll('.terms-link');
    let termsOpener;
    const termsBody = document.querySelector('.terms-body');

    termsLinks.forEach(link => link.addEventListener('click', () => {
        termsOpener = link;
        termsDialog.showModal();
        document.body.classList.add('terms-open');
        termsBody.scrollTop = 0;
        termsBody.focus();
    }));

    document.querySelector('.terms-close').addEventListener('click', () => termsDialog.close());
    // Close only when the interaction starts and ends on the backdrop.
    let backdropPressed = false;
    termsDialog.addEventListener('pointerdown', event => {
        backdropPressed = event.target === termsDialog;
    });
    termsDialog.addEventListener('click', event => {
        if (backdropPressed && event.target === termsDialog) termsDialog.close();
        backdropPressed = false;
    });
    termsDialog.addEventListener('close', () => {
        document.body.classList.remove('terms-open');
        termsOpener?.focus({ preventScroll: true });
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
