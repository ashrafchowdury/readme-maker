import React from "react";
import {
  BiBold,
  BiItalic,
  BiUnlink,
  BiCodeAlt,
  BiListUl,
} from "react-icons/bi";

const InlineSelector = ({ condition }) => {
  return (
    <section
      id="toolbar"
      className={`inlineSelector ${condition} w-[220px] h-[40px] bg-light dark:bg-dark rounded-lg flex items-center justify-between space-x-3 py-2 px-3`}
    >
      <button className="ql-bold text-3xl"><BiBold /></button>
      <button className="ql-italic"><BiItalic /></button>
      <button class="ql-list" value="bullet"><BiListUl /></button>

      <button className="ql-link"><BiUnlink /></button>
      <button className="ql-code"><BiCodeAlt /></button>
    </section>
  );
};

export default InlineSelector;
