import Layout from "./Layout";

export default class Tariffs {
  static startedActive = Layout.tariffs[0];

  static {
    this.onClick();
    this.changeActive(this.startedActive);
    this.choseTariff(this.startedActive);
  }

  static choseTariff(target) {
    Layout.button.href = target.dataset.href;
  }

  static changeActive(target) {
    target.classList.add("tariffs__item--active");
    Layout.tariffs.forEach(item => {
      if (item !== target) item.classList.remove("tariffs__item--active")
    });
    this.choseTariff(target);
  }

  static onClick() {
    Layout.tariffBlock.onclick = evt => this.changeActive(evt.target.closest(".tariffs__item-wrap"));
  }
}