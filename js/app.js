//<!-- Glide Initialization -->

    document.addEventListener("DOMContentLoaded", function () {
        new Glide(".images", {
            type: 'carousel',
            perView: 3,
            focusAt: 'center',
            gap: 10,
            breakpoints: {
                1200: {
                    perView: 3
                },
                800: {
                    perView: 2
                },
                480: {
                    perView: 1
                }
            }
        }).mount();
    });


$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});


//  <!-- scroll activated number counter test -->

function startCounter(element) {
    let target = parseInt(element.getAttribute('data-num'));
    let count = 0;
    let speed = target / 100; 
    let interval = setInterval(() => {
        count += speed;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        element.textContent = Math.floor(count);
    }, 20);
}

function handleScroll() {
    document.querySelectorAll('.num').forEach(num => {
        let rect = num.getBoundingClientRect();
        if (rect.top < window.innerHeight && !num.classList.contains('counted')) {
            num.classList.add('counted');
            startCounter(num);
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);


