//mobile-menu
class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.hamburger__btn');
        this.DOM.container = document.querySelector('.header-container');
        this.DOM.body = document.querySelector('body');
        this.DOM.mobileMenuLink = document.querySelectorAll('.mobile-menu__link');
        this.eventType = this._getEventType();
        this._addEvent();
    }
    _getEventType() {
        const isTouchCapable = 
            "ontouchstart" in window ||
            (window.DocumentTouch && document instanceof window.DocumentTouch)
            navigator.maxTouchPoints > 0 ||
            window.navigator.msMaxTouchPoints > 0;

        return isTouchCapable ? 'touchstart' : 'click';
    }
    _toggle() {
        this.DOM.container.classList.toggle('menu-open');
        this.DOM.btn.classList.toggle('menu-open');
        this.DOM.body.classList.toggle('hidden');
    }
    _closeMenu() {
        if(window.innerWidth >= 960) {
            this.DOM.btn.classList.remove('menu-open');
            this.DOM.container.classList.remove('menu-open');
            this.DOM.body.classList.remove('hidden');
        }
    }
    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        window.addEventListener('resize', this._closeMenu.bind(this));
    }
}