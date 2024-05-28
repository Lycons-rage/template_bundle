import utils from "./utils";

/*-----------------------------------------------
|  Swiper
-----------------------------------------------*/
const swiperInit = () => {
  const swipers = document.querySelectorAll("[data-swiper]");
  swipers.forEach((swiper) => {
    const options = utils.getData(swiper, "swiper");
    const thumbsOptions = options.thumb;
    let thumbsInit;
    if (thumbsOptions) {
      const thumbImages = swiper.querySelectorAll("img");
      let slides = "";
      thumbImages.forEach((img) => {
        slides += `
          <div class='swiper-slide '>
            <img class='img-fluid rounded mt-1' src=${img.src} alt=''/>
          </div>
        `;
      });

      const thumbs = document.createElement("div");
      thumbs.setAttribute("class", "swiper-container thumb");
      thumbs.innerHTML = `<div class='swiper-wrapper'>${slides}</div>`;

      if (thumbsOptions.parent) {
        const parent = document.querySelector(thumbsOptions.parent);
        parent.parentNode.appendChild(thumbs);
      } else {
        swiper.parentNode.appendChild(thumbs);
      }

      thumbsInit = new window.Swiper(thumbs, thumbsOptions);
    }

    // const swiperNav = swiper.querySelector('.swiper-nav');

    return new window.Swiper(swiper, {
      ...options,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: thumbsInit,
      },
    });
  });
};

export default swiperInit;
