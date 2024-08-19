let observerOptions  = {
    root: null, // relative to document viewport
    threshold: 0.5 // callback fires when 10% of the element is visible
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
            else if (entry.target.classList.contains("education-entry-odd")) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateX: [-20, 0],
                    duration: 1000
                });
            }
            else if (entry.target.classList.contains("education-entry-even")) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateX: [20, 0],
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
anime({
    targets: document.querySelectorAll(".education-entry-odd"),
    opacity: [0, 1],
    translateX: [-10, 0],
    duration: 1000,
    autoplay: false
});
anime({
    targets: document.querySelectorAll(".education-entry-even"),
    opacity: [0, 1],
    translateX: [10, 0],
    duration: 1000,
    autoplay: false
});

document.querySelectorAll(".paper-card").forEach(element => {
    observer.observe(element);
});
document.querySelectorAll(".education-entry-odd").forEach(element => {
    observer.observe(element);
});
document.querySelectorAll(".education-entry-even").forEach(element => {
    observer.observe(element);
});

