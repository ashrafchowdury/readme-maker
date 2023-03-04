import React from "react";
import {
  BiBold,
  BiItalic,
  BiUnlink,
  BiCodeAlt,
  BiHeading,
} from "react-icons/bi";
import { CiAlignRight, CiAlignCenterV, CiAlignLeft } from "react-icons/ci";
export const InlineSelector = ({ condition, settextSelected }) => {
  const tooltipClass = document.querySelector(".ql-tooltip");
  const handleAddClass = () => {
    tooltipClass.classList.add("tooltipLink");
    settextSelected("");
  };

  return (
    <section
      id="toolbar"
      className={`inlineSelector ${condition} w-[380px] h-[40px] bg-light dark:bg-dark rounded-lg flex items-center justify-between py-2 px-3`}
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
      <button class="ql-align" value="justify">
        <CiAlignLeft />
      </button>
      <button class="ql-align" value="center">
        <CiAlignCenterV />
      </button>
      <button class="ql-align" value="right">
        <CiAlignRight />
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

export const ImageInline = ({ condition, settextSelected }) => {
  const tooltipClass = document.querySelector(".ql-tooltip");
  const handleAddClass = () => {
    tooltipClass.classList.add("tooltipLink");
    settextSelected("");
  };
  return (
    <section
      id="toolbar"
      className={`inlineSelector ${condition} w-[200px] h-[40px] bg-light dark:bg-dark rounded-lg flex items-center justify-between py-2 px-3`}
    >
      <button class="ql-align" value="justify">
        <CiAlignLeft />
      </button>
      <button class="ql-align" value="center">
        <CiAlignCenterV />
      </button>
      <button class="ql-align" value="right">
        <CiAlignRight />
      </button>
      <button className="ql-link" onClick={handleAddClass}>
        <BiUnlink />
      </button>
    </section>
  );
};
