document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const features = document.querySelectorAll('.feature');
    const options = {
        threshold: 0.1
    };
    
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        });
    }, options);

    features.forEach(feature => {
        revealOnScroll.observe(feature);
    });
});