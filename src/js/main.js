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

  const BASE_SPLIDE = {
    perMove: 1,
    gap: 20,
    speed: 600,
  };

  const CAROUSELS = [
    ['.activity-carousel', { ...BASE_SPLIDE, perPage: 3, arrows: false, rewind: false, drag: false }],
    ['.commission-carousel', { ...BASE_SPLIDE, perPage: 3, arrows: false, rewind: false, drag: false }],
    ['.history-carousel', { ...BASE_SPLIDE, perPage: 4, pagination: false, updateOnMove: true, focus: 'start', gap: undefined }],
    ['.specialists-carousel', { ...BASE_SPLIDE, perPage: 4, pagination: false }],
    ['.news-carousel', { ...BASE_SPLIDE, perPage: 3, pagination: false }],
    ['.events-carousel', { ...BASE_SPLIDE, perPage: 3, pagination: false }],
    ['.specialists-articles__carousel', { ...BASE_SPLIDE, perPage: 3, pagination: false }],
    ['.ceo-carousel', { ...BASE_SPLIDE, perPage: 2, pagination: false }],
  ];

  function mountSplide(selector, options) {
    const el = document.querySelector(selector);
    if (!el) return null;
    return new Splide(el, options).mount();
  }

  CAROUSELS.forEach(([selector, options]) => mountSplide(selector, options));

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
});
