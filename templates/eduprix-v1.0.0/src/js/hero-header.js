// import utils from './utils';

/* -------------------------------------------------------------------------- */
/*                                  Hero header                                  */
/* -------------------------------------------------------------------------- */

const heroHeaderInit = () => {
  const topNav = document.getElementById("topNav");
  const heroCarouselInner = document.getElementById("hero-carousel");
  const heroCarouselContainer = document.getElementById(
    "heroCarouselContainer"
  );
  const heroSlidercounterContainer = document.getElementById(
    "heroSlidercounterContainer"
  );

  const setCarouselContainerMargin = () => {
    heroCarouselContainer.style.paddingLeft =
      getComputedStyle(topNav).marginLeft;
  };

  const setHeroCarouselInnerheight = () => {
    heroSlidercounterContainer.style.height =
      getComputedStyle(heroCarouselInner).height;
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      setCarouselContainerMargin();
      setHeroCarouselInnerheight();
    }
  });

  setTimeout(() => {
    window.dispatchEvent(new Event("resize"));
  }, 5);
};

export default heroHeaderInit;
