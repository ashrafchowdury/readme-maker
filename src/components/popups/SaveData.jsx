import { useState } from "react";
import { database } from "../../appwrite/appwriteConfig";
import { HiX } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "../../utils/hooks/userInfo";
import { useEditor } from "../../utils/hooks/useEditor";

const SaveData = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const { value, editor, seteditor } = useEditor();
  const { user } = useUser();

  const handleSave = async () => {
    if (!value) {
      toast.error("Add data first");
    } else {
      try {
        await database.createDocument(
          "63eb228016758764c7f1", //database id
          "63eb2297eb0ff8f8cc79", // collection id
          uuidv4(), // unique id
          {
            "readme-template": value, // attribute and value
            title: title,
            description: desc,
            user: `${user?.$id}`,
          }
        );
        toast.success("Save data successfully 👍");
        seteditor({ ...editor, save: false });
      } catch (error) {
        console.log(error);
        toast.error("Something was wrong! 🤷‍♀️");
      }
    }
  };
  return (
    <section className="popup">
      <div className=" w-[700px] bg-lightBg dark:bg-darkBg p-9 rounded-xl relative">
        <div className="w-full mb-9 flex justify-between items-center">
          <p className=" text-2xl font-medium ">Save the Template</p>
          <button
            onClick={() => seteditor({ ...editor, save: false })}
            className=" p-2 rounded-lg bg-primary"
          >
            <HiX className=" text-xl" />
          </button>
        </div>

        <label class=" font-medium">Enter your Title</label>
        <input
          type="text"
          name="title"
          placeholder="File Title"
          className="w-full px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2 mb-5 outline-transparent"
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />

        <label class=" font-medium">Enter your Description</label>
        <textarea
          type="text"
          name="desc"
          placeholder="File description"
          className="w-full h-[180px] px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2 outline-transparent"
          onChange={(e) => setdesc(e.target.value)}
          value={desc}
        />

        <button
          className="w-full bg-primary text-white font-semibold rounded-lg px-4 py-3 mt-9"
          onClick={handleSave}
        >
          Save Data
        </button>
      </div>
    </section>
  );
};

export default SaveData;
