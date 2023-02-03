import React from "react";
import { Tooltip } from "react-tooltip";
const Tooltips = () => {
  return (
    <>
      {/********* ToolTip For EditorMenu **********/}
      <Tooltip
        id="tooltip-1"
        className=" !bg-light dark:!bg-dark !rounded-lg font-semibold"
        place="top"
        wrapper={"button"}
        delayShow={500}
      />
    </>
  );
};

export default Tooltips;
