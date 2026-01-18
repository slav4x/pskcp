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
    [
      '.activity-carousel',
      {
        ...BASE_SPLIDE,
        perPage: 3,
        arrows: false,
        rewind: false,
        drag: false,
        breakpoints: { 1260: { perPage: 2, gap: 12, drag: true }, 768: { perPage: 1 } },
      },
    ],
    ['.commission-carousel', { ...BASE_SPLIDE, perPage: 3, arrows: false, rewind: false, drag: false }],
    ['.history-carousel', { ...BASE_SPLIDE, perPage: 4, pagination: false, updateOnMove: true, focus: 'start', gap: undefined }],
    [
      '.specialists-carousel',
      {
        ...BASE_SPLIDE,
        perPage: 4,
        pagination: false,
        breakpoints: { 1260: { perPage: 3, gap: 12, arrows: false, pagination: true }, 974: { perPage: 2 }, 768: { perPage: 1 } },
      },
    ],
    [
      '.news-carousel',
      {
        ...BASE_SPLIDE,
        perPage: 3,
        pagination: false,
        breakpoints: { 1260: { perPage: 2, gap: 12, arrows: false, pagination: true }, 768: { perPage: 1 } },
      },
    ],
    [
      '.events-carousel',
      {
        ...BASE_SPLIDE,
        perPage: 3,
        pagination: false,
        breakpoints: { 1260: { perPage: 2, gap: 12, arrows: false, pagination: true }, 768: { perPage: 1 } },
      },
    ],
    ['.specialists-articles__carousel', { ...BASE_SPLIDE, perPage: 3, pagination: false }],
    ['.ceo-carousel', { ...BASE_SPLIDE, perPage: 2, pagination: false }],
  ];

  function mountSplide(selector, options) {
    const el = document.querySelector(selector);
    if (!el) return null;
    return new Splide(el, options).mount();
  }

  CAROUSELS.forEach(([selector, options]) => mountSplide(selector, options));

  const ikcpifCriteriaItems = document.querySelectorAll('.ikcpif-criteria__item');
  ikcpifCriteriaItems.forEach((item) => {
    const head = item.querySelector('.ikcpif-criteria__item-head');
    const wrapper = item.querySelector('.ikcpif-criteria__item-wrapper');
    const content = item.querySelector('.ikcpif-criteria__item-content');
    head.addEventListener('click', () => {
      head.classList.toggle('open');
      wrapper.style.height = head.classList.contains('open') ? `${content.scrollHeight}px` : null;
    });
  });

  const membershipItems = document.querySelectorAll('.membership-item');
  membershipItems.forEach((item) => {
    const head = item.querySelector('.membership-item__head');
    const wrapper = item.querySelector('.membership-item__wrapper');
    const content = item.querySelector('.membership-item__content');
    head.addEventListener('click', () => {
      head.classList.toggle('open');
      wrapper.style.height = head.classList.contains('open') ? `${content.scrollHeight}px` : null;
    });
  });
});
