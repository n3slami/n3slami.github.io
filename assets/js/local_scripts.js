function toggleColorscheme() {
    const swap_specs = {
        swapStyle: "innerHTML",
        settleDelay: 0.5,
        transition: true
    };
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        htmx.swap("#bd-theme", "<i class='bi bi-sun-fill text-dark htmx-fade-out htmx-fade-in'></i>", swap_specs);
    }
    else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        htmx.swap("#bd-theme", "<i class='bi bi-moon-stars-fill text-light htmx-fade-out htmx-fade-in'></i>", swap_specs);
    }
};


