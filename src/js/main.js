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
    perMove: 1,
    arrows: false,
    gap: 20,
    speed: 600,
    rewind: false,
    drag: false,
  }).mount();

  const specialistsCarousel = new Splide('.specialists-carousel', {
    perPage: 4,
    perMove: 1,
    pagination: false,
    gap: 20,
    speed: 600,
  }).mount();

  const newsCarousel = new Splide('.news-carousel', {
    perPage: 3,
    perMove: 1,
    pagination: false,
    gap: 20,
    speed: 600,
  }).mount();
});
