const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-itme');

tabItem.forEach(function(el){
  el.addEventListener('click', open)
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item) {
    item.classList.remove('tabs__btn-item--active')
  });

  tabTarget.classList.add('tabs__btn-item--active');

  tabContent.forEach(function(itme){
    itme.classList.remove('tabs__content-itme--active')
  })

  document.querySelector(`#${button}`).classList.add('tabs__content-itme--active');

};


const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
