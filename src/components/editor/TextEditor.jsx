import { useState, useEffect, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import Selector from "./Selector";
import InlineSelector from "./InlineSelector";
import EditorMenu from "./EditorMenu";
import useMousePosition from "../../utils/hooks/useMousePosition";
import {
  imageHandler,
  dividerInsert,
  iconHandler,
} from "../../utils/functions/quill-functions";
import ImageResize from "quill-image-resize-module-react";

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
Quill.register({ "modules/imageResize": ImageResize });

const CustomToolbar = ({
  mouse,
  inline,
  selector,
  setisSelector,
  setselectIcons,
  placeholder,
  setplaceholder,
}) => {
  return (
    <div
      id="toolbar"
      className={` absolute !z-20 !border-none`}
      style={{
        top: `${mouse.y}px`,
        left: `${mouse.x}px`,
      }}
    >
      <InlineSelector condition={inline} />
      <Selector
        condition={selector}
        setisSelector={setisSelector}
        setselectIcons={setselectIcons}
        setplaceholder={setplaceholder}
        placeholder={placeholder}
      />
    </div>
  );
};

const TextEditor = () => {
  const [value, setValue] = useState("");
  const [textSelected, settextSelected] = useState("");
  const [selectIcons, setselectIcons] = useState(false);
  const [isSelector, setisSelector] = useState(false);
  const [mousePositionForSelectors, setmousePositionForSelectors] = useState({
    x: null,
    y: null,
  });
  const [placeholder, setplaceholder] = useState({
    x: 35,
    y: 37,
    display: true,
    size: 18,
    text: "Press / for open the selectors",
  });
  const mousePosition = useMousePosition();
  const editor = useRef(null);

  useEffect(() => {
    window.onkeypress = (e) => {
      if (e.key == "/") {
        return false;
      }
    };
  }, []);

  //modules
  const modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        imageHandler: imageHandler, //Add it here
        dividerInsert: dividerInsert,
        iconHandler: iconHandler,
      },
    },
    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize"],
    },
  };
  // handle inline selection component
  const handleSelection = () => {
    settextSelected(window.getSelection().toString());
  };
  const handleToolTip = () => {
    if (window.getSelection()?.anchorNode.data == undefined) {
      setplaceholder({ ...placeholder, display: true });
    } else {
      setplaceholder({ ...placeholder, display: false });
    }

    if (textSelected != "") {
      setmousePositionForSelectors({
        x: mousePosition.x,
        y: mousePosition.y,
      });
    } else {
      return null;
    }
  };
  const handlePlaceholder = (position, y, size, text) => {
    return setplaceholder({
      ...placeholder,
      x: position.left + 5,
      y: position.top + y,
      size: size,
      text: text,
    });
  };
  const handleKey = (e) => {
    e.key == "Enter" && setisSelector(false);
    const quillEdior = editor.current.getEditor();
    const position = quillEdior.getBounds(quillEdior.getSelection()?.index);

    // this condition for opne & close the selectors
    if (e.key == "/") {
      setisSelector(true);
      setmousePositionForSelectors({
        x: position.left,
        y: position.top,
      });
      return false;
    } else {
      setisSelector(false);
    }

    handlePlaceholder(position, 0);
    //this consdition is for align the placeholder
    const tagName = window.getSelection()?.baseNode?.localName;
    if (tagName == "h1") {
      handlePlaceholder(position, 10, 30, "Heading 1");
    } else if (tagName == "h2") {
      handlePlaceholder(position, 6, 24, "Heading 2");
    } else if (window.getSelection()?.baseNode?.firstChild.localName == "img") {
      setplaceholder({ ...placeholder, display: false });
    } else if (tagName == "p" || tagName == "div") {
      handlePlaceholder(position, 0, 18, "Press / for open the selectors");
    } else {
      setplaceholder({ ...placeholder, display: false });
    }
  };

  return (
    <div className=" w-full">
      <EditorMenu value={value} setValue={setValue} />
      <div onMouseUp={handleSelection} className="relative">
        <CustomToolbar
          mouse={mousePositionForSelectors}
          inline={textSelected ? "" : "hidden"}
          selector={isSelector ? "" : "hidden"}
          setisSelector={setisSelector}
          setselectIcons={setselectIcons}
          placeholder={placeholder}
          setplaceholder={setplaceholder}
        />
        <div onClick={handleKey}>
          <ReactQuill
            ref={editor}
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            className="editor"
            onChangeSelection={handleToolTip}
            onKeyUp={handleKey}
          />
        </div>
        {placeholder.display && (
          <div
            className={` absolute z-10 text-lg select-none`}
            style={{
              top: placeholder.y,
              left: placeholder.x,
              fontSize: placeholder.size,
            }}
          >
            {placeholder.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextEditor;
