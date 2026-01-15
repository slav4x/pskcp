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

  const specialistsArticlesCarousel = document.querySelector('.specialists-articles__carousel');
  if (specialistsArticlesCarousel) {
    const splide = new Splide(specialistsArticlesCarousel, {
      perPage: 3,
      perMove: 1,
      pagination: false,
      gap: 20,
      speed: 600,
    }).mount();
  }

  const faqItems = document.querySelectorAll('.ikcpif-criteria__item');
  faqItems.forEach((item) => {
    const title = item.querySelector('.ikcpif-criteria__item-head');
    const content = item.querySelector('.ikcpif-criteria__item-wrapper');
    const text = item.querySelector('.ikcpif-criteria__item-content');
    title.addEventListener('click', () => {
      title.classList.toggle('open');
      content.style.height = title.classList.contains('open') ? `${text.scrollHeight}px` : null;
    });
  });

  const historyCarousel = document.querySelector('.history-carousel');
  if (historyCarousel) {
    const splide = new Splide(historyCarousel, {
      perPage: 4,
      perMove: 1,
      pagination: false,
      speed: 600,
      updateOnMove: true,
      focus: 'start',
    }).mount();
  }

  const ceoCarousel = document.querySelector('.ceo-carousel');
  if (ceoCarousel) {
    const splide = new Splide(ceoCarousel, {
      perPage: 2,
      perMove: 1,
      pagination: false,
      gap: 20,
      speed: 600,
    }).mount();
  }

  const commissionCarousel = document.querySelector('.commission-carousel');
  if (commissionCarousel) {
    const splide = new Splide(commissionCarousel, {
      perPage: 3,
      perMove: 1,
      arrows: false,
      gap: 20,
      speed: 600,
      rewind: false,
      drag: false,
    }).mount();
  }
});
