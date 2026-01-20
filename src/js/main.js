document.addEventListener('DOMContentLoaded', () => {
  Fancybox.bind('[data-fancybox]', {
    dragToClose: false,
    autoFocus: false,
    placeFocusBack: false,
    Thumbs: false,
    Images: {
      zoom: false,
    },
    Iframe: {
      attr: {
        allow: 'autoplay; fullscreen; picture-in-picture; screen-wake-lock',
      },
    },
    on: {
      reveal: (fancybox, slide) => {
        const form = slide.triggerEl.dataset.form;
        const formEl = document.querySelector('#popup-form input[name="form"]');

        formEl.value = form;
      },
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
    [
      '.commission-carousel',
      {
        ...BASE_SPLIDE,
        perPage: 3,
        arrows: false,
        rewind: false,
        drag: false,
        breakpoints: { 1260: { perPage: 2, gap: 12, arrows: false, pagination: true, drag: true }, 768: { perPage: 1 } },
      },
    ],
    [
      '.history-carousel',
      {
        ...BASE_SPLIDE,
        perPage: 4,
        pagination: false,
        updateOnMove: true,
        focus: 'start',
        gap: undefined,
        breakpoints: { 1260: { perPage: 3, arrows: false, pagination: true }, 974: { perPage: 2 }, 768: { perPage: 1 } },
      },
    ],
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
    [
      '.specialists-articles__carousel',
      {
        ...BASE_SPLIDE,
        perPage: 3,
        pagination: false,
        breakpoints: { 1260: { perPage: 2, gap: 12, arrows: false, pagination: true }, 768: { perPage: 1 } },
      },
    ],
    [
      '.ceo-carousel',
      { ...BASE_SPLIDE, perPage: 2, pagination: false, breakpoints: { 1260: { perPage: 1, arrows: false, pagination: true } } },
    ],
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

  function generateToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 30; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }

  function setToken(form) {
    const token = generateToken();
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 't';
    hiddenInput.value = token;
    form.appendChild(hiddenInput);
  }

  const forms = document.querySelectorAll('form:not([method="get"])');
  forms.forEach(function (form) {
    setToken(form);

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const button = form.querySelector('button.btn');

      button.style.opacity = 0.5;
      button.style.cursor = 'not-allowed';
      button.disabled = true;

      const formUrl = form.getAttribute('action');
      const formData = new FormData(this);

      fetch(formUrl, {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          window.location.href = '/thanks';
        })
        .catch((error) => console.error('Error:', error));
    });
  });

  function getUtmParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {};
    for (const [key, value] of urlParams.entries()) {
      if (key !== 's') {
        utmParams[key] = value;
      }
    }
    return utmParams;
  }

  function setUtmParamsInForms(utmParams) {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      Object.keys(utmParams).forEach((key) => {
        if (key !== 's') {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = utmParams[key];
          form.appendChild(input);
        }
      });
    });
  }

  function saveUtmParamsWithExpiration(utmParams) {
    const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    const dataToSave = {
      utmParams,
      expirationTime,
    };
    localStorage.setItem('utmData', JSON.stringify(dataToSave));
  }

  function loadUtmParamsFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('utmData'));
    if (data && data.expirationTime > new Date().getTime()) {
      return data.utmParams;
    } else {
      return {};
    }
  }

  function clearUtmParamsIfExpired() {
    const data = JSON.parse(localStorage.getItem('utmData'));
    if (data && data.expirationTime <= new Date().getTime()) {
      localStorage.removeItem('utmData');
    }
  }

  const utmParamsFromUrl = getUtmParams();
  const savedUtmParams = loadUtmParamsFromLocalStorage();

  if (Object.keys(utmParamsFromUrl).length > 0) {
    setUtmParamsInForms(utmParamsFromUrl);
    saveUtmParamsWithExpiration(utmParamsFromUrl);
  } else if (Object.keys(savedUtmParams).length > 0) {
    setUtmParamsInForms(savedUtmParams);
  }

  clearUtmParamsIfExpired();
});
