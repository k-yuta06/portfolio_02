class heroSlider {
    constructor(el) {
      this.el = el;
      this.swiper = this._initSwiper();
    }
    _initSwiper() {
      return new Swiper(this.el, {
        loop: true,
        grabCursor: true,
        effect: 'fade', 
        centeredSlides: true,
        slidePerView: 1, 
        speed: 2000,
      });
    }
    start(options = {}) {
      options = Object.assign({
        delay: 4000,
        disableOnInteraction: false 
      }, options);
      this.swiper.params.autoplay = options;
      this.swiper.autoplay.start();
    }
  }

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   loop: true,
//   grabCursor: true,
//   effect: 'fade', 
//   centeredSlides: true,
//   slidePerView: 1, 
//   speed: 2000,
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false
//   }
// });