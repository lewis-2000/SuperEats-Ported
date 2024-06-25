document.addEventListener('DOMContentLoaded', function () {
    const cardContainers = document.querySelectorAll('.meal-card');
    const cartItems = [];
    var totalPrice = 0;
    localStorage.setItem('TotalPrice', totalPrice);

    cardContainers.forEach(cardContainer => {
        const getFoodButtons = cardContainer.querySelectorAll('.get-btn');

        getFoodButtons.forEach(getFoodButton => {
            getFoodButton.addEventListener('click', () => {
                const mealId = parseInt(getFoodButton.dataset.mealId);
                const foodName = cardContainer.querySelector('.meal-card-title h2').textContent;
                const foodPrice = cardContainer.querySelector('.price-btn').textContent;
                const foodDescription = cardContainer.querySelector('.meal-card-description p').textContent;
                const foodImage = cardContainer.querySelector('.meal-card-image').src;
                const foodVideo = cardContainer.querySelector('.meal-card-video').src;

                const existingItemIndex = cartItems.findIndex(item => item.mealId === mealId);

                if (existingItemIndex !== -1) {
                    // If item exists, update quantity
                    console.log('Existing');
                    cartItems[existingItemIndex].quantity += 1;
                } else {
                    // If item doesn't exist, add a new one
                    console.log('Not Existing');
                    const foodCard = {
                        mealId: mealId,
                        name: foodName,
                        quantity: 1,
                        price: foodPrice ,
                        foodDescription: foodDescription,
                        foodImage: foodImage,
                        foodVideo: foodVideo
                    };
                    cartItems.push(foodCard);
                }

                updateCartDisplay();
            });
        });
    });

    const cartModal = document.getElementById('cart-modal');
    const closeCartButton = document.getElementById('close-cart-modal');
    const cartButton = document.getElementById('cart-link');

    closeCartButton.addEventListener('click', () => {
        cartModal.close();
    });

    if (cartButton) {
        cartButton.addEventListener('click', () => {
            cartModal.showModal();
            updateCartDisplay();
        });
    }

    function updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cart-items-container');

        if (cartItems.length > 0) {
            cartItemsContainer.innerHTML = '';

            cartItems.forEach(item => {
                const cartItemElement = document.createElement('div');
                cartItemElement.classList.add('cart-item-card');

                cartItemElement.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.foodImage}" alt="Image of the food in the cart">
                    </div>
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-description">${item.foodDescription}</div>
                    <div class="cart-item-price">${item.price}</div>
                    <div class="cart-item-quantity">${item.quantity}</div>`;

                cartItemsContainer.appendChild(cartItemElement);
            });
        } else {
            cartItemsContainer.innerHTML = `<div class="cart-no-item">
                                                <p> No items in the Basket</p>
                                            </div>`;
        }
    }
});




//Convert to int
// price: parseInt(foodPrice.replace(/\D/g, ' ')) ,
