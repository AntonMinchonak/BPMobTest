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
    Layout.restore.textContent = dict["Restore"];
    Layout.title.textContent = dict["Unlimited Access to All Features"];
    Layout.contentItems[0].textContent = dict["Unlimited documents"];
    Layout.contentItems[1].textContent = dict["clouds"];
    Layout.contentItems[2].textContent = dict["Text recognition (OCR)"];
    Layout.tariffsTitles[0].textContent = dict["Monthly"];
    Layout.tariffsTitles[1].textContent = dict["Annually"];
    Layout.tariffsSubprice[0].textContent = dict["per month"];
    Layout.tariffsSubprice[1].textContent = dict["per year"];
    Layout.specials[0].textContent = dict["3 DAYS FREE"];
    Layout.specials[1].textContent = dict["MOST POPULAR"];
    Layout.bottomPrice.forEach(item => (item.textContent = dict["per month"]));
    Layout.button.textContent = dict["Continue"];
    Layout.rewable.textContent = dict["Auto-renewable. Cancel anytime."];
    Layout.corpInfo[0].textContent = dict["Terms of Use"];
    Layout.corpInfo[1].textContent = dict["Privacy Policy"];
  }
}
