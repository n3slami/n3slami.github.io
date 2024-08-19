let observerOptions  = {
    root: null, // relative to document viewport
    threshold: 0.2 // callback fires when 10% of the element is visible
};
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("paper-card")) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateX: [-10, 0],
                    duration: 1000
                });
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

anime({
    targets: document.querySelectorAll(".paper-card"),
    opacity: [0, 1],
    translateX: [-10, 0],
    duration: 1000,
    autoplay: false
});

document.querySelectorAll(".paper-card").forEach(element => {
    observer.observe(element);
});

