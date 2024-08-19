let observerOptions  = {
    root: null, // relative to document viewport
    threshold: 0.3 // callback fires when 10% of the element is visible
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

let faceTimeline = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
});
faceTimeline.add({
    targets: "#sw-js-blob-svg path",
    d: [
        { value: "M 0 0 C 0 0 0 0 0 0 C 0 0 0 0 0 0 C 0 0 0 0 0 0 C 0 0 0 0 0 0 C 0 0 0 0 0 0 C 0 0 0 0 0 0 C 0 0 0 0 0 0 C 0 0 0 0 0 0 C 0 0 0 0 0 0 C 0 0 0 0 0 0 C 0 0 0 0 0 0 C 0 0 0 0 0 0 Z" },
        { value: "M21,-37.9C26.9,-33,31,-26.6,34.4,-20.1C37.9,-13.5,40.6,-6.8,40.2,-0.3C39.8,6.3,36.1,12.5,32.6,18.9C29,25.3,25.6,31.8,20.1,34.9C14.7,38.1,7.4,37.9,-0.2,38.3C-7.8,38.7,-15.6,39.7,-21.5,36.8C-27.4,33.9,-31.4,27.1,-34.2,20.4C-36.9,13.6,-38.5,6.8,-39.2,-0.4C-39.9,-7.6,-39.7,-15.2,-36.1,-20.7C-32.6,-26.1,-25.8,-29.5,-19.2,-33.9C-12.6,-38.4,-6.3,-43.9,0.6,-45C7.6,-46.1,15.2,-42.7,21,-37.9Z" },
    ],
    duration: 2000
});
faceTimeline.add({
    targets: ".face-img-overlay-wrap img",
    opacity: [0, 1],
    translateX: ["-47%", "-50%"],
    translateY: ["-47%", "-50%"],
});
faceTimeline.add({
    targets: "#site-welcome",
    opacity: [0, 1],
    delay: 500,
    duration: 1000
}, "-=1100");
faceTimeline.add({
    targets: "#site-description",
    opacity: [0, 1],
    duration: 1000
});
faceTimeline.add({
    targets: "#site-links a",
    opacity: [0, 1],
    delay: anime.stagger(100) // increase delay by 100ms for each elements.
}); 
faceTimeline.play();
