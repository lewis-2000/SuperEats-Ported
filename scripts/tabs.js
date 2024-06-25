
function openTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    const categoriesLinks = document.querySelectorAll('.categories ul li');


    tabs.forEach(tab => tab.style.display = 'none');

    // Show the selected tab
    document.getElementById(tabName).style.display = 'flex';

    // Add 'active' class to the corresponding tab link and remove from others
    categoriesLinks.forEach(link => {
        if (link.dataset.tab === tabName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
