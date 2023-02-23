import React from "react";
import {
  BiBold,
  BiItalic,
  BiUnlink,
  BiCodeAlt,
  BiListUl,
  BiHeading,
} from "react-icons/bi";

const InlineSelector = ({ condition }) => {
  const tooltipClass = document.querySelector(".ql-tooltip");
  const handleAddClass = () => {
    tooltipClass.classList.add("tooltipLink");
  };
  return (
    <section
      id="toolbar"
      className={`inlineSelector ${condition} w-[320px] h-[40px] bg-light dark:bg-dark rounded-lg flex items-center justify-between py-2 px-3`}
    >
      <button className="ql-header !flex" value="1">
        <BiHeading className=" !text-xl" />{" "}
        <span className=" !text-sm"> 1</span>
      </button>

      <button className="ql-header !flex" value="2">
        <BiHeading className=" !text-xl" />{" "}
        <span className=" !text-sm"> 2</span>
      </button>

      <button className="ql-header !flex" value="3">
        <BiHeading className=" !text-xl" />{" "}
        <span className=" !text-sm"> 3</span>
      </button>

      <button className="ql-bold">
        <BiBold />
      </button>
      <button className="ql-italic">
        <BiItalic />
      </button>
      <button class="ql-list" value="bullet">
        <BiListUl />
      </button>

      <button className="ql-link" onClick={handleAddClass}>
        <BiUnlink />
      </button>
      <button className="ql-code">
        <BiCodeAlt />
      </button>
    </section>
  );
};

export default InlineSelector;
