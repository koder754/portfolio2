// Loading Screen
window.addEventListener("load", () => {
    document.getElementById("loading").style.display = "none";
});

// Scroll-to-top button visibility
window.addEventListener("scroll", () => {
    const scrollTopBtn = document.getElementById("scrollTop");
    const sections = document.querySelectorAll("section");

    // Show or hide scroll button
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }

    // Section animations
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 1.2) {
            section.classList.add("show");
        }
    });
});

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Form validation
function validateForm() {
    let isValid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");

    if (!name.value.trim()) {
        name.nextElementSibling.style.display = "block";
        isValid = false;
    } else {
        name.nextElementSibling.style.display = "none";
    }

    if (!email.value.trim() || !email.value.includes("@")) {
        email.nextElementSibling.style.display = "block";
        isValid = false;
    } else {
        email.nextElementSibling.style.display = "none";
    }

    return isValid;
}
