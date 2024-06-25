document.addEventListener('DOMContentLoaded', () => {
    const mealCards = document.querySelectorAll('.meal-card');

    mealCards.forEach(card => {
        // Add event listeners for mouseenter and mouseleave
        card.addEventListener('mouseenter', () => {
            // Switch to video when mouse enters
            switchImageAndVideo(card, true);
        });

        card.addEventListener('mouseleave', () => {
            // Switch back to image when mouse leaves
            switchImageAndVideo(card, false);
        });
    });
});

function switchImageAndVideo(card, showVideo) {
    const imageContainer = card.querySelector('.meal-card-image');
    const videoContainer = card.querySelector('.meal-card-video');
    const mealCardDescription = card.querySelector('.meal-card-description');
    const mealCardTitle = card.querySelector('.meal-card-title');
    const getButton = card.querySelector('.get-btn');
    const priceButton = card.querySelector('.price-btn');

    if (showVideo) {
        imageContainer.style.display = 'none';
        videoContainer.style.display = 'block';
        mealCardDescription.style.display = 'block';
        mealCardTitle.style.display = 'none';
        getButton.style.display = 'block';
        priceButton.style.display = 'block';
    } else {
        imageContainer.style.display = 'block';
        videoContainer.style.display = 'none';
        mealCardDescription.style.display = 'none';
        mealCardTitle.style.display = 'flex';
        getButton.style.display = 'none';
        priceButton.style.display = 'none';
    }
}
