import { useState } from "react";
import {
  BiSave,
  BiX,
  BiDownload,
  BiCopyAlt,
  BiNotepad,
  BiCheckCircle,
} from "react-icons/bi";
import { toast } from "react-hot-toast";
import { downloadFile } from "../../utils/functions/download";
import Icons from "../utils/Icons";
import SaveData from "../popups/SaveData";
import PrevData from "../popups/PrevData";

const EditorMenu = ({ value, setValue }) => {
  const [save, setsave] = useState(false);
  const [prevPopup, setprevPopup] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    toast.success("Text copied successfully 👍");
  };

  return (
    <>
      <div className="editorMenu flex justify-between items-center h-[60px] px-4 border border-light dark:border-dark rounded-lg mb-3">
        <p className=" flex items-center font-medium">
          Editor
          <span className=" text-green-500 ml-2 text-lg">
            <BiCheckCircle />
          </span>
        </p>

        <div className=" flex items-center space-x-3">
          <Icons content="Add Preveous Data" click={() => setprevPopup(true)}>
            <BiNotepad />
          </Icons>
          <Icons content="Copy Data" click={handleCopy}>
            <BiCopyAlt />
          </Icons>
          <Icons content="Download Readme File" click={() => downloadFile()}>
            <BiDownload />
          </Icons>
          <Icons content="Save File" click={() => setsave(true)}>
            <BiSave />
          </Icons>
          <Icons content="Clear Data" click={() => setValue("")}>
            <BiX />
          </Icons>
        </div>
      </div>
      {save && <SaveData setsave={setsave} value={value} />}
      {prevPopup && (
        <PrevData setprevPopup={setprevPopup} setValue={setValue} />
      )}
    </>
  );
};

export default EditorMenu;
