import { docReady } from './utils';
import swiperInit from './swiper';
import countupInit from './countup';
import detectorInit from './detector';
import carouselInit from './carousel';
import heroHeaderInit from './hero-header';


/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(detectorInit);
docReady(countupInit);
docReady(swiperInit);
docReady(carouselInit);
docReady(heroHeaderInit);
