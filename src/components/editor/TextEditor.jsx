import { useState, useEffect, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import "react-quill/dist/quill.snow.css";
import Selector from "./Selector";
import InlineSelector from "./InlineSelector";
import EditorMenu from "./EditorMenu";
import {
  imageHandler,
  dividerInsert,
  iconHandler,
} from "../../utils/functions/quill-functions";
import { useEditor } from "../../utils/hooks/useEditor";
import "./CustomIcons_Selectors";
import InputTag from "./InputTag";
import MyComponent from "./Experiment";

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
      className={`custom absolute !z-20 !border-none`}
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
  const handleSelection = () => {
    settextSelected(window.getSelection().toString());
  };

  const handleToolTip = () => {
    const quillEdior = editor.current.getEditor();
    const position = quillEdior.getBounds(quillEdior.getSelection()?.index);
    if (window.getSelection()?.anchorNode.data == undefined) {
      setplaceholder({ ...placeholder, display: true });
    } else {
      setplaceholder({ ...placeholder, display: false });
    }

    if (textSelected != "") {
      setmousePositionForSelectors({
        x: position.left - 80,
        y: position.top - 60,
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
    e.key == "Enter" && setIsKeyEnabled(false);
    const quillEdior = editor.current.getEditor();
    const position = quillEdior.getBounds(quillEdior.getSelection()?.index);

    const windowHeight = document.documentElement.clientHeight;

    // Get the position and height of the div
    const divRect = document
      .querySelector(".placeholder")
      .getBoundingClientRect();

    const bottomSpace = windowHeight - divRect.top - divRect.height; // Calculate the space available from the bottom of the div

    // console.log(`top: ${topSpace}, bottom: ${bottomSpace}`);

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

  const handleSaveLocal = (e) => {
    if (window.getSelection()?.anchorNode.data.length > 10) {
      setTimeout(() => {
        setDataSaveIcon(true);
        localStorage.setItem("template", value);
      }, 10000);
      setDataSaveIcon(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key == "/" && !isKeyEnabled) {
      event.preventDefault();
    }
  };

  const handleEditorChange = (content, delta, source, editor) => {
    setValue(content);
    setIsKeyEnabled(window.getSelection()?.anchorNode.data.length > 1);
  };
  return (
    <div className=" w-full">
      <EditorMenu dataSaveIcon={dataSaveIcon} />
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
        <GrammarlyEditorPlugin clientId="client_CWguQMGT3AtvUQw7vdoKNk">
          <div onClick={handleKey}>
            <ReactQuill
              ref={editor}
              theme="snow"
              value={value}
              onChange={handleEditorChange}
              modules={modules}
              className="editor"
              onChangeSelection={handleToolTip}
              onKeyUp={handleKey}
              onKeyPress={handleSaveLocal}
              onKeyDown={handleKeyDown}
              disableAutoformat={true}
            />
          </div>
        </GrammarlyEditorPlugin>
        {placeholder.display && (
          <div
            className={`placeholder absolute z-10 text-lg select-none`}
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
      {/* <InputTag /> */}
      {/* <MyComponent /> */}
    </div>
  );
};

export default TextEditor;


