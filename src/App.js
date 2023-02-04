import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Tooltips from "./components/utils/Tooltips";
import Home from "./pages/Home";
import Editor from "./pages/Editor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} animate={true} />
      </Routes>
      <TooltipProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Tooltips />
      </TooltipProvider>
    </>
  );
}

export default App;
