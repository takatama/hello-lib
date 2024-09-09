import template from "./template.html?raw";
import style from "./style.css?raw";

const HelloLib = {
  init(container) {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = style;
    document.head.appendChild(styleElement);

    container.innerHTML = template;
  },
};

export default HelloLib;
