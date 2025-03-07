document.querySelector('.down-arrow a').addEventListener('click', function(e) {
    e.preventDefault();

    const targetPosition = document.querySelector('#about-section').offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Durée en millisecondes (ici 1 seconde)
    let start = null;

    function animationScroll(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const ease = easeInOutCubic(progress / duration);
        window.scrollTo(0, startPosition + distance * ease);
        if (progress < duration) requestAnimationFrame(animationScroll);
    }

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    requestAnimationFrame(animationScroll);
});
