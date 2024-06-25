document.addEventListener('DOMContentLoaded', function () {

    //Categories section
    const categoriesLinks = document.querySelectorAll('.categories ul li')

    for (const link of categoriesLinks) {
        link.addEventListener('click', function () {
            if (link.classList.contains('active')) {
                link.classList.toggle('inactive');
                
            } else {
                link.classList.toggle('active');
            }

        });
    }


    //parallax scrolling
    const hero = document.getElementById("hero");
    let isHeroAdjusted = false;
    
    window.addEventListener('scroll', function() {
        const offset = window.scrollY;
        const offsetDivision = offset / 5;
    
        if (!isHeroAdjusted) {
            if (offset > 40) {
                hero.style.height = (90 - offsetDivision) + 'vh';
            } else {
                hero.style.height = 95 + 'vh';
            }
        }
    
        if (offset > 256 && !isHeroAdjusted) {
            isHeroAdjusted = true;
            hero.style.height = 70 + 'vh'; // Adjust to your desired height after 256 scrollY
        }
    
        if (offset <= 256 && isHeroAdjusted) {
            isHeroAdjusted = false;
            // You may want to reset the hero's height here if needed
        }
    });
    
    



});
