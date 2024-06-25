// Assuming your HTML has a button with the id "loadMealsButton" and a div with the id "mealsList"

document.addEventListener('DOMContentLoaded', () => {

    const mealsList = document.getElementById('meals-container');
        // Fetch meals from the JSON Server API
      fetch('http://localhost:5000/meals')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(meals => {
          // Display the meals in the UI
          displayMeals(meals);
        })
        .catch(error => {
          console.error('Error fetching meals:', error);
        });
  
        
        function displayMeals(meals) {
          // Clear previous content
          mealsList.innerHTML = '';
        
          // Display each meal in the UI
          meals.forEach(meal => {
            const mealElement = document.createElement('div');
            mealElement.classList.add('meal-card');
            
            mealElement.innerHTML = `
              <div class="meal-card-title">
                <h2>${meal.name}</h2>
              </div>
              <img src="${meal.imageUrl}" alt="Meal Image" style="max-width: 200px;">
              <video src="${meal.videoUrl}" autoplay loop muted></video>
            `;
            
            mealsList.appendChild(mealElement);
          });
        }
        
  
  });
  
  