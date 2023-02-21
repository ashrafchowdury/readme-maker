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

  const handleCopy = () => {
    if (value.length > 20) {
      navigator.clipboard.writeText(value);
      toast.success("Text copied successfully 👍");
    } else {
      toast.error("Pleace add enough text for copy");
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
