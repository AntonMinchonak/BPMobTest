export default class Layout {
  static body = document.querySelector("body");
  static restore = document.querySelector(".offer__restore");
  static titleWrap = document.querySelector(".offer__title");
  static title = document.querySelector(".offer__title span");
  static content = document.querySelector(".features");
  static contentItems = document.querySelectorAll(".features__item span");
  static tariffBlock = document.querySelector(".tariffs");
  static tariffs = document.querySelectorAll(".tariffs__item-wrap");
  static tariffsTitles = document.querySelectorAll(".tariffs__title");
  static tariffsSubprice = document.querySelectorAll(".tariffs__subprice");
  static specials = document.querySelectorAll(".tariffs__special");
  static bottomPrice = document.querySelectorAll(".tariffs__bottom-price span");
  static button = document.querySelector(".button");
  static rewable = document.querySelector(".offer__rewable");
  static corpInfo = document.querySelectorAll(".corp-info__item");

  static {
    window.onload = () => {
      this.adaptiveStyle();
      window.onresize = () => this.adaptiveStyle();
    }
  }

  static adaptiveStyle() {
    const windowHeight = window.innerHeight;
    const contentHeight = this.body.scrollHeight;
   
    if (windowHeight < contentHeight) {
      this.content.style.marginBottom = "auto";
      this.titleWrap.classList.add('offer__title--condensed')
    } else {
      this.content.style.margin = "";
      this.titleWrap.classList.remove("offer__title--condensed");
    }
  }
}
