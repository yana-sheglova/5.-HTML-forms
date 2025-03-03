import "./css/style.css";
import Popover from "./js/popover";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#popoverBtn");
  const popover = new Popover();

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    popover.togglePopover(btn);
  });

  document.addEventListener("click", (e) => {
    if (
      popover.isVisible &&
      !popover.popover.contains(e.target) &&
      e.target !== btn
    ) {
      popover.hidePopover();
    }
  });
});
