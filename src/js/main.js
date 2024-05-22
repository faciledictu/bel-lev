import Swiper from 'swiper';
import { Thumbs } from 'swiper/modules';
import activateStickyCards from './stickyCards';

const swipers = {};

const carousels = document.querySelectorAll('[data-swiper-type="carousel"]');

carousels.forEach((e) => {
  const swiperParams = {
    spaceBetween: 10,
  };

  const thumbCarusel = document.querySelector(
    `[data-swiper-thumbs-for="${e.id}"]`
  );

  if (thumbCarusel) {
    const thumbsSwiper = new Swiper(thumbCarusel, {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    swiperParams.modules = [Thumbs];
    swiperParams.thumbs = { swiper: thumbsSwiper };
  }

  swipers[e.id] = new Swiper(e, swiperParams);
});

const stickyCards = document.querySelectorAll('[data-sticky="on-bottom"]');
activateStickyCards(stickyCards);
