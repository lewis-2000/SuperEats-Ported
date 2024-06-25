document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data/meals.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const { meals } = await response.json();
        const mealsContainer = document.getElementById('tab1');

        meals.forEach(meal => {
            const mealCard = document.createElement('div');
            mealCard.classList.add('meal-card');

            mealCard.innerHTML = `
          <div class="meal-id" style="max-width: 200px;"></div>
          <img id="meal-image" class="meal-card-image" src="${meal.imageUrl}" alt="Meal Image" style="max-width: 200px;">
          <video id="meal-video" class="meal-card-video" src="${meal.videoUrl}" autoplay loop muted style="display: none;"></video>
          <button type="submit" id="get-btn" data-meal-id="${meal.mealId}" class="get-btn">Get</button>
          <button type="submit" id="price-btn" class="price-btn">$${meal.price}</button>
          <div class="meal-card-title">
            <h2>${meal.name}</h2>
          </div>
          <div class="meal-card-description">
            <p>${meal.description}</p>
          </div>
        `;

            // Add event listeners for hover effect
            mealCard.addEventListener('mouseenter', () => {
                toggleMedia(mealCard);
            });

            mealCard.addEventListener('mouseleave', () => {
                toggleMedia(mealCard);
            });

            mealsContainer.appendChild(mealCard);
        });
    } catch (error) {
        console.error('Error fetching meals:', error);
    }
});

function toggleMedia(mealCard) {
    console.log('toggleMedia hit');
    const image = mealCard.querySelector('.meal-card-image');
    const video = mealCard.querySelector('.meal-card-video');

    if (image.style.display === 'none') {
        image.style.display = 'block';
        video.style.display = 'none';
    } else {
        image.style.display = 'none';
        video.style.display = 'block';
    }
}
