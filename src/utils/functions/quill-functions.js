export function imageHandler() {
  const tooltip = this.quill.theme.tooltip;
  const originalSave = tooltip.save;
  const originalHide = tooltip.hide;
  const div = document.querySelector(".ql-tooltip");
  div.classList.remove("tooltipLink");
  div.classList.add("tooltipImage");

  tooltip.save = function () {
    const range = this.quill.getSelection(true);
    const value = this.textbox.value;
    if (value) {
      this.quill.insertEmbed(range.index, "image", value, "user");
    }
  };
  // Called on hide and save.
  tooltip.hide = function () {
    tooltip.save = originalSave;
    tooltip.hide = originalHide;
    tooltip.hide();
    div.classList.remove("tooltipImage");
  };
  tooltip.edit("image");
  tooltip.textbox.placeholder = "Add Image URL";
}

export function iconHandler() {
  const tooltip = this.quill.theme.tooltip;
  const originalSave = tooltip.save;
  const originalHide = tooltip.hide;
  const div = document.querySelector(".ql-tooltip");
  div.classList.remove("tooltipLink");
  div.classList.add("tooltipImage");

  tooltip.save = function () {
    const range = this.quill.getSelection(true);
    let iconName = this.textbox.value;
    const icons = iconName.split(",");
    if (icons) {
      icons?.reverse().map((value) => {
        this.quill.insertEmbed(
          range.index,
          "image",
          `https://skillicons.dev/icons?i=${value}`,
          "user"
        );
      });
    }
  };
  tooltip.hide = function () {
    tooltip.save = originalSave;
    tooltip.hide = originalHide;
    tooltip.hide();
    div.classList.remove("tooltipImage");
  };

  tooltip.edit("image");
  tooltip.textbox.placeholder = "Add Skills Name By ,";
}

export function dividerInsert() {
  const range = this.quill.getSelection();
  if (range) {
    this.quill.insertEmbed(range.index, "hr", "null");
  }
}
