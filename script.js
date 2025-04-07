
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        circle.style.setProperty('--percentage', percentage);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    function checkSectionVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4; // Adjust trigger point

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible'); // Add visible class
            } else {
                section.classList.remove('visible'); // Remove class if not in view
            }
        });
    }

    // Check visibility on scroll
    window.addEventListener('scroll', checkSectionVisibility);
    
    // Initial check
    checkSectionVisibility();
});


