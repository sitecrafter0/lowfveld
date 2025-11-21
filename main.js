// ===============================
// STICKY HEADER + SCROLL SHADOW
// ===============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ===============================
// SCROLL ANIMATIONS
// ===============================
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ===============================
// BACK TO TOP BUTTON
// ===============================
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (backToTop && window.scrollY > 500) {
        backToTop.classList.add("visible");
    } else if (backToTop) {
        backToTop.classList.remove("visible");
    }
});

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ===============================
// SIMPLE WORKING MOBILE NAV
// ===============================
function toggleMenu() {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("nav-open");
}
