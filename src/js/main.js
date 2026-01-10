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

  const maskOptions = {
    mask: '+7 (000) 000-00-00',
    onFocus() {
      if (this.value === '') this.value = '+7 ';
    },
    onBlur() {
      if (this.value === '+7 ') this.value = '';
    },
  };

  document.querySelectorAll('.masked').forEach((item) => new IMask(item, maskOptions));

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
