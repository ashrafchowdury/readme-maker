import React from "react";
import { BiSave, BiX, BiDownload, BiCopyAlt } from "react-icons/bi";

const EditorMenu = ({ value, setValue }) => {
  const handleDownload = () => {};
  const handleClear = () => {
    setValue("");
  };
  return (
    <>
      <div className="editorMenu flex justify-between items-center h-[60px] px-4 border border-light dark:border-dark rounded-lg mb-3">
        <p className=" font-medium">Editor</p>
        <div className=" flex items-center space-x-3">
          <button
            onClick={() => {
              navigator.clipboard.writeText(value);
            }}
          >
            <BiCopyAlt />
          </button>
          <button onClick={handleDownload}>
            <BiDownload />
          </button>
          <button>
            <BiSave />
          </button>
          <button onClick={handleClear}>
            <BiX />
          </button>
        </div>
      </div>
    </>
  );
};

export default EditorMenu;
