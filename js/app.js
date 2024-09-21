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

const buttons = document.querySelectorAll('#buttons button');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const portfolioSection = document.getElementById('portfolio');


// Function to filter portfolio items based on category
function filterCategory(category) {
    // Remove 'active' class from all buttons
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    const clickedButton = document.querySelector(`button[onclick*="${category}"]`);
    clickedButton.classList.add('active');


    // Show or hide portfolio items based on the selected category
    portfolioItems.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block'; // Show all items
        } else if (item.id === category) {
            item.style.display = 'block'; // Show matching items
        } else {
            item.style.display = 'none'; // Hide non-matching items
        }
    });
}

// Automatically set the last active button and apply the filter on page load
document.addEventListener('DOMContentLoaded', () => {
    filterCategory(lastActiveCategory);
});

// When clicking outside the portfolio section, remove the active class and show all items
document.addEventListener('click', function (event) {
    if (!portfolioSection.contains(event.target) && !event.target.closest('#buttons')) {
        buttons.forEach(button => {
            button.classList.remove('active');
        });

        // Reset the filter to show all items
        portfolioItems.forEach(item => {
            item.style.display = 'block'; // Show all items
        });
    }
});