document.addEventListener("DOMContentLoaded", () => {
    const hamburguesaBtn = document.getElementById("menu-hamburguesa");
    const navMenu = document.getElementById("opciones");

    hamburguesaBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    const div = document.getElementById("menu");
    observer.observe(div);

});