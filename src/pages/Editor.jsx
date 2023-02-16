import { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import Aside from "../components/navigation/Aside";
import TextEditor from "../components/editor/TextEditor";

const Editor = () => {
  const [value, setValue] = useState("");
  const [sidebar, setsidebar] = useState(true);
  return (
    <>
      <Navbar setsidebar={setsidebar} />
      <section className=" flex justify-between">
        <TextEditor value={value} setValue={setValue} />
        <Aside sidebar={sidebar} setValue={setValue} />
      </section>
    </>
  );
};
export default Editor;
