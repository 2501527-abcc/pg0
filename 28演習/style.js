document.addEventListener('DOMContentLoaded', function () {
  new Splide('#card-carousel', {
    perPage: 1,
    type: 'loop',
    pauseOnHover: true,
    gap: '1rem',
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  }).mount();
});
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#card-anime', {
    perPage: 1,
    type: 'loop',
    pauseOnHover: true,
    gap: '1rem',
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  }).mount();
});


