document.addEventListener('DOMContentLoaded', () => {
    const mealsTabs = document.querySelectorAll('.categories ul li');

    mealsTabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            const tabName = tab.dataset.tab;
            openMealsTab(tabName);
        }, { once: true });
    });

    // Set the default tab
    const defaultTab = mealsTabs[0].dataset.tab;
    openMealsTab(defaultTab);
});

function openMealsTab(tabName) {
    console.log('Clicked on tab:', tabName);
    const tabs = document.querySelectorAll('.tab-content');
    const categoriesLinks = document.querySelectorAll('.categories ul li');

    tabs.forEach(tab => tab.style.display = 'none');

    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = 'flex';
    }

    categoriesLinks.forEach(link => {
        if (link.dataset.tab === tabName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
