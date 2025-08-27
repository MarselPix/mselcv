document.addEventListener('DOMContentLoaded', function() {

    // --- Custom Cursor Logic ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', function(e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
    });

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.borderColor = '#03dac6';
        });
        link.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.borderColor = '#bb86fc';
        });
    });

    // --- Typing Effect Logic ---
    const typingEffectElement = document.querySelector('.typing-effect');
    const words = ["11th Grade RPL Student", "Canva Designer", "Future Success Story"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        const currentChar = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);

        typingEffectElement.textContent = currentChar;
        typingEffectElement.style.color = isDeleting ? '#a0a0a0' : '#03dac6'; // Change color while typing/deleting

        if (!isDeleting && charIndex === currentWord.length) {
            // Pause at the end of the word
            setTimeout(() => { isDeleting = true; }, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        const typeSpeed = isDeleting ? 50 : 150;
        setTimeout(type, typeSpeed);
    }

    type();

    // --- On Scroll Reveal Animation ---
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150; // height in pixels from bottom of viewport

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("visible");
            } else {
                reveals[i].classList.remove("visible");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    // To reveal elements already in view on load
    reveal();
});