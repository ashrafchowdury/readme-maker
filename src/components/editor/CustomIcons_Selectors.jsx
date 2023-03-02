import { Quill } from "react-quill";
import ResizeModule from "@botom/quill-resize-module";

Quill.register("modules/resize", ResizeModule);
let Embed = Quill.import("blots/block/embed");
class Hr extends Embed {
  static create(value) {
    let node = super.create(value);
    return node;
  }
}
Hr.blotName = "hr";
Hr.tagName = "hr";
Quill.register({
  "formats/hr": Hr,
});

let icons = Quill.import("ui/icons");
icons["header"][1] = null;
icons["header"][2] = null;
icons["list"]["bullet"] = null;
icons["list"]["ordered"] = null;
icons["link"] = null;
icons["code-block"] = null;
icons["image"] = null;
icons["video"] = null;
icons["bold"] = null;
icons["code"] = null;
icons["italic"] = null;

let Keyboard = Quill.import("modules/keyboard");

class CustomKeyboard extends Keyboard {
  static DEFAULTS = {
    ...Keyboard.DEFAULTS,
    bindings: {
      ...Keyboard.DEFAULTS.bindings,
      ["list autofill"]: undefined,
    },
  };
}

Quill.register("modules/keyboard", CustomKeyboard);
