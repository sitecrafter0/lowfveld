// ------------------------------
// Smooth Scroll for Internal Links
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only smooth scroll if the link points to an ID on the same page
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ------------------------------
// Mobile Navigation Toggle
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("navMenu");

    if (toggle && nav) {
        // Open/close menu when hamburger is clicked
        toggle.addEventListener("click", () => {
            nav.classList.toggle("open");
        });

        // Close menu when clicking any nav link
        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("open");
            });
        });
    }
});
