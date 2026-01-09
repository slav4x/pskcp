document.addEventListener('DOMContentLoaded', () => {
  Fancybox.bind('[data-fancybox]', {
    dragToClose: false,
    autoFocus: false,
    placeFocusBack: false,
    Thumbs: false,
    Images: {
      zoom: false,
    },
  });

  const activityCarousel = new Splide('.activity-carousel', {
    perPage: 3,
    arrows: false,
    gap: 20,
    speed: 600,
    rewind: false,
    drag: false,
  }).mount();
});
