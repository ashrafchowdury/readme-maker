import { useState } from "react";
import { BiX } from "react-icons/bi";
function InputTag() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim()) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    } else if (event.key === "Backspace" && !inputValue && tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  };

  const handleDeleteTag = (tagIndex) => {
    setTags(tags.filter((tag, index) => index !== tagIndex));
  };

  return (
    <div className="ql-tooltip ql-editing w-[90%] flex flex-col bg-light dark:bg-dark p-5 rounded-lg">
      <p>Add Skills</p>
      <div className="mb-2 flex space-x-3">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-lightBg dark:bg-darkBg text-sm rounded-lg px-3 py-[6px]"
          >
            <span>{tag}</span>
            <button
              onClick={() => handleDeleteTag(index)}
              className="ml-2 text-darkBg dark:text-lightBg"
            >
              <BiX className=" text-lg" />
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        className="text-[16px] rounded-lg px-4 py-3 text-lightBg dark:text-darkBg bg-lightBg dark:bg-darkBg"
        placeholder="Add Languages ..."
      />
    </div>
  );
}

export default InputTag;
