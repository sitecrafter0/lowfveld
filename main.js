// Smooth scroll behavior for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
<script>
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

toggle.onclick = () => {
    nav.classList.toggle("open");
};

function closeMenu() {
    nav.classList.remove("open");
}
</script>
