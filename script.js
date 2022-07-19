// BARRA DE MENU
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  const changeThemeBtn = document.querySelector("#change-theme");
toggleDarkMode();

// ALTERNAR O MODO ESCURO
function toggleDarkMode() {
    document.body.classList.toggle("dark");

}

//  CARREGAR O MODO CLARO OU ESCURO
function loadTheme() {
    const darkMode = localStorage.getitem("dark")

    if (darkMode) {
        toggleDarkMode();
    }
}

changeThemeBtn.addEventListener("change", function() {
    toggleDarkMode();

    //SALVAR OU REMOVER O MODO ESCURO
        localStorage.removeItem("dark");

        if(document.body.classList.contains("dark")) {
            localStorage.setItem("dark", 1);
        }
});
