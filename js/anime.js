[...document.querySelector('.head_nav div').children].forEach((el, ei) => {
  anime({
    targets: el,
    translateX: [-50, 0],
    opacity: [0, 1],
    delay: eval(ei + 1) * 100,
    // easing: 'easeInOutQuad',
    duration: 1000,
  });
});

const intro_box = document.querySelector('.intro_box')
const introBoxObserverOptions = { rootMargin: '-230px' }
const introBoxObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!sessionStorage.getItem('intro_box_animation')) {
        [...document.querySelector('.intro_box_left div').children].forEach((el, ei) => {
          el.style.display = 'flex'
          anime({
            targets: el,
            translateY: [30, 0],
            opacity: [0, 1],
            delay: eval(ei + 1) * 200,
            easing: 'easeInOutQuad',
            duration: 500,
          });
        });
        sessionStorage.setItem('intro_box_animation', 1)
      }
    }
  })
}, introBoxObserverOptions)
introBoxObserver.observe(intro_box);


const gallery_box = document.querySelector('.gallery_box');
const galleryBoxObserverOptions = { rootMargin: '-80px' }
const galleryBoxObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!sessionStorage.getItem('galleryBoxAnimation')) {
        [...document.querySelector('.gallery_nav').children].forEach((el, ei) => {
          el.style.display = 'flex'
          anime({
            targets: el,
            translateX: [30, 0],
            opacity: [0, 1],
            delay: eval(ei + 1) * 100,
            easing: 'easeInOutQuad',
            duration: 500,
          });
        })
        sessionStorage.setItem('galleryBoxAnimation', 1)
      }
    }
  })
}, galleryBoxObserverOptions);
galleryBoxObserver.observe(gallery_box);


