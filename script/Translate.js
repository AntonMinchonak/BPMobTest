import translate from "/Localizations/translate.js";
import Layout from "./Layout";

export default class Translate {
  static userLang;

  static {
    this.defineUserLang();
    this.replaceText(translate);
  }

  static defineUserLang() {
    let urlLangParam = window.location.search
      .replace("?", "")
      .split("&")
      .find(e => e.includes("lang"))
      ?.slice(5);
    if (urlLangParam && !translate[urlLangParam]) urlLangParam = "en";
    const browserLang = (navigator.language || navigator.userLanguage).slice(0, 2);
    this.userLang = urlLangParam ?? browserLang;
  }

  static replaceText(translate) {
    const dict = translate[this.userLang];
    Layout.translateFields.forEach(el => {
      for (let fieldN in dict) {
        if (el.dataset.id === fieldN) el.textContent = dict[fieldN];
      }
    })
  }
}
