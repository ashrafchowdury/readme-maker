import { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import Aside from "../components/navigation/Aside";
import TextEditor from "../components/editor/TextEditor";

const Editor = () => {
  const [sidebar, setsidebar] = useState(true);
  return (
    <>
      <main className=" w-[90%] sm:w-[550px] md:w-[767px] lg:w-[1023px] xl:w-[1400px] mx-auto">
        <Navbar setsidebar={setsidebar} />
        <section className=" flex justify-between">
          <TextEditor />
          <Aside sidebar={sidebar} />
        </section>
      </main>
    </>
  );
};
export default Editor;
