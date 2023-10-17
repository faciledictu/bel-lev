import Swiper from 'swiper';
import { Thumbs } from 'swiper/modules';

//Swiper
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
  console.log(swipers);
});

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    makeStickyOnBottomEdge(entry.target);
  }
});

//Sticky Cards
// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty("--vh", `${vh}px`);
// elem.style.top = `calc(var(--vh, 1vh) * 100 - ${elem.offsetHeight}px)`;

const stickyCards = document.querySelectorAll('[data-sticky="on-bottom"]');

const makeStickyOnBottomEdge = (elem) => {
  elem.style.position = 'sticky';
  elem.style.top = `calc(100vh - ${elem.offsetHeight}px)`;
};

stickyCards.forEach((elem) => resizeObserver.observe(elem));
