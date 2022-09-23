function initSmoothScroll() {
  const cards = document.querySelectorAll('.js-scroll');
  const halfWindow = window.innerHeight * 0.5;

    cards.forEach((card) => {
      const cardsTop = card.getBoundingClientRect().top;
      const isVisible = (cardsTop - halfWindow) < 100;
        if(isVisible) {
          card.classList.add('js-scroll-active');
        } else {
          card.classList.remove('js-scroll-active');
        }

    })

}
initSmoothScroll()


window.addEventListener('scroll', initSmoothScroll);
initSmoothScroll()
