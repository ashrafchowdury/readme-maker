import { useState } from "react";
import {
  BiSave,
  BiX,
  BiDownload,
  BiCopyAlt,
  BiNotepad,
  BiCheckCircle,
  BiLoaderCircle,
} from "react-icons/bi";
import { toast } from "react-hot-toast";
import { downloadFile } from "../../utils/functions/download";
import Icons from "../utils/Icons";
import SaveData from "../popups/SaveData";
import PrevData from "../popups/PrevData";
import { useEditor } from "../../utils/hooks/useEditor";

const EditorMenu = ({ dataSaveIcon }) => {
  const { value, setValue, editor, seteditor } = useEditor();

  const handleCopy = async () => {
    const copy = () => {
      if (value.length > 20) {
        navigator.clipboard.writeText(
          value
            .replace(/class="ql-align-center"/g, 'align="center"')
            .replace(/class="ql-align-right"/g, 'align="right"')
            .replace(/class="ql-align-justify"/g, 'align="left"')
        );
        toast.success("Text copied successfully 👍");
      } else {
        toast.error("Pleace add enough text for copy");
      }
    };
    if (value?.includes('"></')) {
      const images = document.querySelectorAll("p > img"); // select all images
      if (images?.length == 1) {
        copy();
      } else {
        images.forEach((image) => {
          const space = document.createTextNode("\u00A0"); // create a text node with the Unicode value of &nbsp;
          image.insertAdjacentHTML("afterend", space.textContent); // append the text node after the image
        });
      }
    } else {
      copy();
    }
  };
  const handleClean = () => {
    if (value.length > 20) {
      const conformation = window.confirm("Do you want to clean your data");
      conformation && setValue("");
    }
  };

  return (
    <>
      <div className="editorMenu flex justify-between items-center h-[60px] px-4 border border-light dark:border-dark rounded-lg mb-3">
        <p className=" flex items-center font-medium">
          Editor
          <span className=" ml-2 text-lg">
            {dataSaveIcon ? (
              <BiCheckCircle className=" text-primary" />
            ) : (
              <BiLoaderCircle className=" delay-1000 animate-spin" />
            )}
          </span>
        </p>

        <div className=" flex items-center space-x-3">
          <Icons
            content="Add Preveous Data"
            click={() => seteditor({ ...editor, prevPopup: true })}
          >
            <BiNotepad />
          </Icons>
          <Icons content="Copy Data" click={handleCopy}>
            <BiCopyAlt />
          </Icons>
          <Icons
            content="Download Readme File"
            click={() => downloadFile(value)}
          >
            <BiDownload />
          </Icons>
          <Icons
            content="Save File"
            click={() =>
              value.length > 12 && seteditor({ ...editor, save: true })
            }
          >
            <BiSave />
          </Icons>
          <Icons content="Clear Data" click={handleClean}>
            <BiX />
          </Icons>
        </div>
      </div>
      {editor.save && <SaveData />}
      {editor.prevPopup && <PrevData />}
    </>
  );
};

export default EditorMenu;
