document.addEventListener('DOMContentLoaded', () => {
    var menuBtn = document.querySelector('.main-navbar .menu-btn');
    var navList = document.querySelector('.main-navbar .nav-list');
    var menuListItem = document.querySelectorAll('.nav-list li a');

    // Ensure the menu button and nav list exist
    if (menuBtn && navList) {
        menuBtn.addEventListener('click', () => {
            navList.classList.toggle('active'); 
            menuBtn.classList.toggle('active'); 
        });

        menuListItem.forEach(item => {
            item.addEventListener('click', () => {
                navList.classList.remove('active'); 
                menuBtn.classList.remove('active'); 
            });
        });
    } else {
        console.error('Menu button or nav list not found.');
    }

    window.addEventListener('load', function() {
        var homeSection = document.querySelector('.home');
        
        if (homeSection) {
            window.addEventListener('scroll', pageScrollFunction);
            pageScrollFunction(); // Call it once on load to check initial scroll position
        }
    
        function pageScrollFunction() {
            if (window.scrollY > 120) {
                homeSection.classList.add('active');
            } else {
                homeSection.classList.remove('active');
            }
        }
    });
    
//partners section start
    if ($('.partners-slider').length) {
        $('.partners-slider').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 10,
            nav: true,
            navText: [
                "<i class='fa-solid fa-arrow-left'></i>",
                "<i class='fa-solid fa-arrow-right'></i>"
            ],
            responsive: {
                0: { items: 1 },
                500: { items: 2 },
                700: { items: 3 },
                1000: { items: 5 } 
            }
        });
    } else {
        console.error('Partners slider not found.');
    }
   
    
    
});
 //partners section end

 //testimonail section start
 
 $(document).ready(function() {
    if ($('.testimonial-slider').length) { 
        $('.testimonial-slider').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            margin: 10,
            nav: true,
            navText: [
                "<i class='fa-solid fa-arrow-left'></i>",
                "<i class='fa-solid fa-arrow-right'></i>"
            ],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
              
            }
        });
    } else {
        console.error('Testimonial slider not found.'); 
    }
});
