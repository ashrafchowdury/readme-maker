export function imageHandler() {
  const tooltip = this.quill.theme.tooltip;
  const originalSave = tooltip.save;
  const originalHide = tooltip.hide;

  tooltip.save = function () {
    const range = this.quill.getSelection(true);
    console.log(range);
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
  };
  tooltip.edit("image");
  tooltip.textbox.placeholder = "Embed URL";
}
export function dividerInsert() {
  const range = this.quill.getSelection();
  if (range) {
    this.quill.insertEmbed(range.index, "hr", "null");
  }
}
