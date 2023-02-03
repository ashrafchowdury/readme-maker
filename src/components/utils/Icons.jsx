import React from "react";
import { TooltipWrapper } from "react-tooltip";

const Icons = ({ content, click, children, style }) => {
  return (
    <TooltipWrapper tooltipId="tooltip-1" content={content}>
      <button onClick={click} className={style}>{children}</button>
    </TooltipWrapper>
  );
};

export default Icons;
