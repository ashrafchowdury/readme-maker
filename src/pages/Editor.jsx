import { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import Aside from "../components/navigation/Aside";
import TextEditor from "../components/editor/TextEditor";

const Editor = () => {
  return (
    <>
      <Navbar />
      <section className=" flex justify-between">
        <TextEditor />
        <Aside />
      </section>
    </>
  );
};
export default Editor;
