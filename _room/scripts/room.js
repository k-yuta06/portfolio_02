
document.addEventListener('DOMContentLoaded', function() {
  new MobileMenu();
  new Main();  
});

class Main {
  constructor() {
    this.DOM = {};
    this.DOM.header = document.querySelector('.header');
    this.DOM.modal = document.querySelector('.modal');
    this.DOM.modalBtn = document.querySelector('.modal__closeBtn');
    this.DOM.contactBtn = document.querySelector('.contact-btn');
    this.DOM.body = document.querySelector('body');
    this.DOM.mobileMenuLink = document.querySelectorAll('.mobile-menu__link');
    this.DOM.headerContainer = document.querySelector('.header-container');
    this.DOM.hamburgerBtn = document.querySelector('.hamburger__btn');
    this.eventType = this.getEventType();
    this.init();
  }
  init() {
    this.addEvent();
  }
  getEventType() {
    const isTouchCapable = 
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)
        navigator.maxTouchPoints > 0 ||
        window.navigator.msMaxTouchPoints > 0;

    return isTouchCapable ? 'touchstart' : 'click';
  }
  headerScroll() {
    if(window.scrollY > 100) {
      this.DOM.header.classList.add('scroll');
    } else {
      this.DOM.header.classList.remove('scroll');
    }
  }
  openModal() {
    this.DOM.modal.classList.add('modal-open');
    this.DOM.body.classList.add('hidden');
  }
  closeModal() {
    this.DOM.modal.classList.remove('modal-open');
    this.DOM.body.classList.remove('hidden');
  }
  closeMobileMenu() {
    this.DOM.hamburgerBtn.classList.remove('menu-open');
    this.DOM.headerContainer.classList.remove('menu-open');
    this.DOM.body.classList.remove('hidden');
  }
  addEvent() {
    window.addEventListener('scroll', this.headerScroll.bind(this));
    this.DOM.contactBtn.addEventListener(this.eventType, this.openModal.bind(this));
    this.DOM.modalBtn.addEventListener(this.eventType, this.closeModal.bind(this));
    
    for(let i = 0; i < this.DOM.mobileMenuLink.length; i++) {
      this.DOM.mobileMenuLink[i].addEventListener(this.eventType, this.closeMobileMenu);
    }
  }
}

// タブメニュー
const tabs = document.querySelectorAll('.news__tab');
const panels = document.querySelectorAll('.news__panel');

for(let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function() {

    const activeTab = document.querySelector('.active');
    const showPanel = document.querySelector('.show');

    //タブの切り替え
    activeTab.classList.remove('active');
    this.classList.add('active');

    //コンテンツの切り替え
    showPanel.classList.remove('show');
    panels[i].classList.add('show');
  });
}

