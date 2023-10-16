// Import our custom CSS
// import "../scss/styles.scss";
import "swiper/css";

import Swiper from "swiper";
import { Thumbs } from "swiper/modules";

// Import only the Bootstrap components we need

const makeStickyOnBottomEdge = (elem) => {
  elem.style.position = "sticky";
  // elem.style.top = `calc(var(--vh, 1vh) * 100 - ${elem.offsetHeight}px)`;
  elem.style.top = `calc(100vh - ${elem.offsetHeight}px)`;
  console.log(elem.offsetHeight);
};

const stickyCards = document.querySelectorAll('[data-sticky="on-bottom"]');

const makeStickyCards = () => {
  // let vh = window.innerHeight * 0.01;
  // document.documentElement.style.setProperty("--vh", `${vh}px`);
  stickyCards.forEach(makeStickyOnBottomEdge);
};

const swiper = {};

["revolutsii", "gorkogo", "komsomolskaya", "belinskogo"].forEach((id) => {
  swiper[id] = {};

  swiper[id].thumbs = new Swiper(`#swiper-${id}-thumbs`, {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  swiper[id].swiper = new Swiper(`#swiper-${id}`, {
    spaceBetween: 10,
    modules: [Thumbs],
    thumbs: {
      swiper: swiper[id].thumbs,
    },
  });
});

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    makeStickyOnBottomEdge(entry.target);
  }

  console.log("Size changed");
});

stickyCards.forEach((elem) => resizeObserver.observe(elem));
