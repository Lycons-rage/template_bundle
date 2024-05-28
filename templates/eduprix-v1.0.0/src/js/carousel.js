// import utils from './utils';

/* -------------------------------------------------------------------------- */
/*                                Carousel                                 */
/* -------------------------------------------------------------------------- */

const carouselInit = () => {
    const heroCarousel = document.getElementById('hero-carousel');
    const counterEl = document.getElementById('heroSlidercounter');

    heroCarousel.addEventListener('slide.bs.carousel', function (e) {
        const count = `0${e.to + 1}`;
        counterEl.innerHTML = count;
    })
};

export default carouselInit;
