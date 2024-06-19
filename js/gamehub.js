document.addEventListener('DOMContentLoaded', function() {
    const backArrow = document.querySelector('.back-arrow');
    const homePage = document.getElementById('home-page');
    const gamePage = document.getElementById('game-page');

    // Only show the back arrow on game pages
    // if (gamePage) {
    //     backArrow.style.display = 'block';
    // }

    // Function to navigate to the game page
    window.navigateToGame = function(gameUrl) {
        window.location.href = gameUrl;
    };
});