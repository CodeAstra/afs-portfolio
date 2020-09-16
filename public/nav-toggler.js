const navToggler = {
  isOpen: false,
  handleTogglerClick: function() {
    this.toggler.onclick = (ev) => {
      this.toggler.style.display = "none";
      if (this.isOpen) {
        this.navMenu.classList.remove("open");
      } else {
        this.navMenu.classList.add("open");
      }
      this.updateTogglerText();
      this.isOpen = !this.isOpen;

      setTimeout(() => {
        this.toggler.style.display = "block";
      }, 1000);
    }
  },
  setTogglerElements: function() {
    this.toggler = document.querySelector('nav .nav-toggler');
    this.navMenu = document.querySelector('nav ul');
    this.navMenuItems = document.querySelector('nav ul li');
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
