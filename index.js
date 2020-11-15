window.onload = () => {
    init();
}

function init() {
    const imagesList = [
        {
            src: 'weatherly.png',
            text: 'Weatherly',
            link: 'https://jovial-mahavira-f918e9.netlify.app'
        },
        {
            src: 'tipcalculator.png',
            text: 'Tip Calculator',
            link: 'https://tip-calc-b6952.firebaseapp.com'
        },
        {
            src: 'unsplash.png',
            text: 'Responsive Image Gallery',
            link: 'https://flamboyant-murdock-b3eece.netlify.app'
        },
        {
            src: 'jobboard.png',
            text: 'Github Jobs',
            link: 'https://thirsty-panini-b697a8.netlify.app'
        },
        {
            src: 'quotely.png',
            text: 'Quotely',
            link: 'https://suspicious-payne-170697.netlify.app'
        },
    ];
    const initCarousel = () => {
        const carousel = document.querySelector('.carousel');
        imagesList.forEach(item => {
            const listItem = document.createElement('div');
            const anchorTag = document.createElement('a');
            const image = document.createElement('img');
            const text = document.createElement('p');

            carousel.appendChild(listItem);
            listItem.appendChild(image);
            listItem.appendChild(anchorTag);
            anchorTag.appendChild(text);

            listItem.classList.add('slick-list-item');
            image.src = `assets/images/${item.src}`;
            anchorTag.src = item.link;
            text.textContent = item.text;
        });
        loadSlickCaraousel();
    }

    const loadSlickCaraousel = () => {
        $('.carousel').slick({
            dots: false,
            infinite: false,
            speed: 300,
            swipe: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: "<button type='button' class='slick-prev pull-left'><img class='slick-caret' src='assets/images/black_caret.png' alt='Previous'/></button>",
            nextArrow: "<button type='button' class='slick-next pull-right slick-caret'><img class='slick-caret' src='assets/images/black_caret.png' alt='next'/></button>",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    initCarousel();

};