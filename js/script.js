document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll("nav a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
});