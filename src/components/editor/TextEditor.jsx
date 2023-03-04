import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import "react-quill/dist/quill.snow.css";
import Selector from "./Selector";
import { InlineSelector, ImageInline } from "./InlineSelector";
import EditorMenu from "./EditorMenu";
import {
  imageHandler,
  dividerInsert,
  iconHandler,
} from "../../utils/functions/quill-functions";
import { useEditor } from "../../utils/hooks/useEditor";
import "./QuillConfig";
const CustomToolbar = ({
  mouse,
  inline,
  selector,
  setisSelector,
  setselectIcons,
  placeholder,
  setplaceholder,
  imageInline,
  settextSelected,
}) => {
  return (
    <div
      id="toolbar"
      className={`custom absolute !z-20 !border-none`}
      style={{
        top: `${mouse.y}px`,
        left: `${mouse.x}px`,
      }}
    >
      <InlineSelector condition={inline} settextSelected={settextSelected} />
      <ImageInline condition={imageInline} settextSelected={settextSelected} />
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
  const [dataSaveIcon, setDataSaveIcon] = useState(true);
  const [isKeyEnabled, setIsKeyEnabled] = useState(false);
  const { value, setValue } = useEditor();
  const editor = useRef(null);

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
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
    resize: {
      locale: {
        floatLeft: "Left",
        floatRight: "Right",
        center: "Center",
      },
    },
  };
  // handle inline selection component
  const handleToolTip = () => {
    const quillEdior = editor.current?.getEditor();
    const position = quillEdior?.getBounds(quillEdior.getSelection()?.index);

    if (window.getSelection()?.anchorNode.data == undefined) {
      setplaceholder({ ...placeholder, display: true });
      if (window.getSelection()?.anchorNode.innerHTML?.includes("img")) {
        settextSelected("$image");
      } else {
        settextSelected("");
      }
    } else {
      setplaceholder({ ...placeholder, display: false });
      settextSelected(window.getSelection().toString());
    }

    if (textSelected != "") {
      setmousePositionForSelectors({
        x: position.left - 80,
        y: position.top - 60,
      });
    }
  };

  const placeholderPosition = (position, y, size, text) => {
    return setplaceholder({
      ...placeholder,
      x: position.left + 5,
      y: position.top + y,
      size: size,
      text: text,
    });
  };

  const handleSelectorPosition = (e) => {
    e.key == "Enter" && setisSelector(false);
    e.key == "Enter" && setIsKeyEnabled(false);
    const quillEdior = editor.current.getEditor();
    const position = quillEdior.getBounds(quillEdior.getSelection()?.index);
    //
    const windowHeight = document.documentElement.clientHeight;
    // Get the position and height of the div
    const divRect = document
      .querySelector(".placeholder")
      ?.getBoundingClientRect();
    const bottomSpace = windowHeight - divRect?.top - divRect?.height; // Calculate the space available from the bottom of the div

    // this condition for opne & close the selectors
    if (e.key == "/" && window.getSelection()?.anchorNode.data == undefined) {
      setisSelector(true);
      setmousePositionForSelectors({
        x: position.left,
        y: bottomSpace < 300 ? position.top - 360 : position.top,
      });
    } else {
      setisSelector(false);
    }

    placeholderPosition(position, 0);
    //this consdition is for align the placeholder
    const tagName = window.getSelection()?.baseNode?.localName;
    switch (tagName) {
      case "h1":
        placeholderPosition(position, 10, 30, "Heading 1");
        break;
      case "h2":
        placeholderPosition(position, 6, 24, "Heading 2");
        break;
      case "p" || "div":
        placeholderPosition(position, 0, 18, "Press / for open the selectors");
        break;
      default:
        setplaceholder({ ...placeholder, display: false });
        break;
    }
    if (window.getSelection()?.baseNode?.firstChild?.localName == "img") {
      setplaceholder({ ...placeholder, display: false });
    }
    if (window.getSelection()?.anchorNode.data?.length > 10) {
      saveToLocalStorage(e);
    }
  };

  const saveToLocalStorage = (e) => {
    if (window.getSelection()?.anchorNode?.data?.length > 10) {
      setTimeout(() => {
        setDataSaveIcon(true);
        localStorage.setItem("template", value);
      }, 10000);
      setDataSaveIcon(false);
    }
  };

  const handleOpenSelector = (event) => {
    if (event.key == "/" && !isKeyEnabled) {
      event.preventDefault();
    }
  };

  const handleEditorChange = (content, delta, source, editor) => {
    setValue(content);
    setIsKeyEnabled(window.getSelection()?.anchorNode?.data?.length > 1);
  };
  return (
    <div className=" w-full">
      <EditorMenu dataSaveIcon={dataSaveIcon} />
      <div className="relative">
        <CustomToolbar
          mouse={mousePositionForSelectors}
          inline={
            textSelected && !textSelected?.includes("$image") ? "" : "hidden"
          }
          imageInline={textSelected?.includes("$image") ? "" : "hidden"}
          selector={isSelector ? "" : "hidden"}
          setisSelector={setisSelector}
          setselectIcons={setselectIcons}
          placeholder={placeholder}
          setplaceholder={setplaceholder}
          settextSelected={settextSelected}
        />
        <GrammarlyEditorPlugin clientId="client_CWguQMGT3AtvUQw7vdoKNk">
          <div onClick={handleSelectorPosition}>
            <ReactQuill
              ref={editor}
              theme="snow"
              value={value}
              onChange={handleEditorChange}
              modules={modules}
              className="editor"
              onChangeSelection={handleToolTip}
              onKeyUp={handleSelectorPosition}
              onKeyDown={handleOpenSelector}
            />
          </div>
        </GrammarlyEditorPlugin>
        {placeholder.display && (
          <div
            className={`placeholder absolute z-10 text-lg select-none text-slate-600 dark:text-slate-500 duration-100`}
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
