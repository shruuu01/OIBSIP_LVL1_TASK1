document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselImages = document.querySelectorAll('.carousel-container img');
    const totalImages = carouselImages.length;
    const imagesToShow = 3;

    function moveCarousel(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex > totalImages - imagesToShow) {
            currentIndex = totalImages - imagesToShow;
        }
        const offset = currentIndex * (carouselImages[0].clientWidth + 20); 
        carouselContainer.style.transform = `translateX(-${offset}px)`;
    }

    document.querySelector('.carousel-button.left').addEventListener('click', () => moveCarousel(-1));
    document.querySelector('.carousel-button.right').addEventListener('click', () => moveCarousel(1));

    const models = document.querySelectorAll('.model');

    function handleScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;
        models.forEach(model => {
            const modelTop = model.getBoundingClientRect().top;
            if (modelTop < triggerBottom) {
                model.classList.add('show');
            } else {
                model.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
});
