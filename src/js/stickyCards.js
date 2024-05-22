// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty("--vh", `${vh}px`);
// elem.style.top = `calc(var(--vh, 1vh) * 100 - ${elem.offsetHeight}px)`;

const makeStickyOnBottomEdge = (elem) => {
  elem.style.position = 'sticky';
  elem.style.top = `calc(100vh - ${elem.offsetHeight}px)`;
};

export default function activateStickyCards(elements) {
  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => makeStickyOnBottomEdge(entry.target));
  });

  elements.forEach((elem) => resizeObserver.observe(elem));
}
