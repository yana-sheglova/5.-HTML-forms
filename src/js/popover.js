export default class Popover {
  constructor() {
    this.popover = null;
    this.isVisible = false;
  }

  createPopover() {
    if (!this.popover) {
      this.popover = document.createElement("div");
      this.popover.id = "popover";
      this.popover.classList.add("popover");
      this.popover.innerHTML = `
                <h3>Название поповера</h3>
                <p>Текст поповера с дополнительной информацией</p>
            `;
      document.body.appendChild(this.popover);
    }
  }

  showPopover(button) {
    this.createPopover();
    if (!this.popover) return;

    const btnRect = button.getBoundingClientRect();
    const popoverRect = this.popover.getBoundingClientRect();
    console.log(btnRect);

    const top = btnRect.top - popoverRect.height - 10;
    const left = btnRect.left + btnRect.width / 2 - popoverRect.width / 2;

    this.popover.style.top = `${top}px`;
    this.popover.style.left = `${left}px`;
    this.isVisible = true;
    console.log(popoverRect);
  }

  hidePopover() {
    if (this.popover) {
      this.popover.style.display = "none";
      this.isVisible = false;
    }
  }

  togglePopover(button) {
    if (this.isVisible) {
      this.hidePopover();
    } else {
      this.showPopover(button);
    }
  }
}
