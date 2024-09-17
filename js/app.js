(function () {
    const setTheme = (theme) => {
        if (theme === 'light') {
            document.body.classList.add("light-mode");
        } else {
            document.body.classList.remove("light-mode");
        }
    };

    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        const currentTheme = document.body.classList.contains("light-mode") ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    });
})();