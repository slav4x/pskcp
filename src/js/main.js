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

  const activityCarousel = document.querySelector('.activity-carousel');
  if (activityCarousel) {
    const splide = new Splide(activityCarousel, {
      perPage: 3,
      perMove: 1,
      arrows: false,
      gap: 20,
      speed: 600,
      rewind: false,
      drag: false,
    }).mount();
  }

  const specialistsCarousel = document.querySelector('.specialists-carousel');
  if (specialistsCarousel) {
    const splide = new Splide(specialistsCarousel, {
      perPage: 4,
      perMove: 1,
      pagination: false,
      gap: 20,
      speed: 600,
    }).mount();
  }

  const newsCarousel = document.querySelector('.news-carousel');
  if (newsCarousel) {
    const splide = new Splide(newsCarousel, {
      perPage: 3,
      perMove: 1,
      pagination: false,
      gap: 20,
      speed: 600,
    }).mount();
  }

  const eventsCarousel = document.querySelector('.events-carousel');
  if (eventsCarousel) {
    const splide = new Splide(eventsCarousel, {
      perPage: 3,
      perMove: 1,
      pagination: false,
      gap: 20,
      speed: 600,
    }).mount();
  }
});
