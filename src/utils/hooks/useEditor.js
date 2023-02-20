import { useState, createContext, useContext } from "react";

export const EditorContext = createContext();
export const useEditor = () => useContext(EditorContext);

const EditorDataProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [editor, seteditor] = useState({
    sidebar: true,
    save: false,
    prevPopup: false,
  });
  const states = {
    value,
    setValue,
    editor,
    seteditor,
  };
  return (
    <EditorContext.Provider value={states}>{children}</EditorContext.Provider>
  );
};
export default EditorDataProvider;
