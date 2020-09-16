const navToggler = {
  isOpen: false,
  handleTogglerClick: function() {
    this.toggler.onclick = (ev) => {
      this.isOpen ? this.close() : this.open();
      this.updateTogglerText();
    }
  },
  close: function() {
    this.isOpen = false;
    this.navMenu.classList.remove("open");
  },
  open: function() {
    this.isOpen = true;
    this.navMenu.classList.add("open");
  },
  setTogglerElements: function() {
    this.toggler = document.querySelector('nav .nav-toggler');
    this.navMenu = document.querySelector('nav ul');
  },
  toggler: null,
  togglerTexts: {
    open: '☰',
    close: '✖'
  },
  updateTogglerText: function() {
    const identifier = this.isOpen ? 'close' : 'open';
    this.toggler.innerHTML = this.togglerTexts[identifier];
  },
  init: function () {
    this.setTogglerElements();
    this.updateTogglerText();
    this.handleTogglerClick();
  },
};

document.addEventListener("DOMContentLoaded", () => {
  navToggler.init.bind(navToggler)();
});
