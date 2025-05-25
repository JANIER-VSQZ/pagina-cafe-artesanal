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
            }else{
                entry.target.classList.remove("visible");
            }
        });
    });

    const divs = document.querySelectorAll(".producto");
    divs.forEach(div=>{
        observer.observe(div);
    })
    
});