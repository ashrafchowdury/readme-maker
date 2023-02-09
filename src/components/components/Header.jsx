import React from "react";

const Header = ({ section, title, desc }) => {
  return (
    <>
      <p className=" text-primary font-semibold mb-4">{section}</p>
      <h2 className=" text-5xl font-bold mb-7 ml-5">{title}</h2>
      <p>{desc}</p>
    </>
  );
};

export default Header;
