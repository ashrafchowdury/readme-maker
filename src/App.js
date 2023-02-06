import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Tooltips from "./components/utils/Tooltips";
import Home from "./pages/Home";
import Editor from "./pages/Editor";

function App() {
  return (
    <main className=" w-[90%] sm:w-[550px] md:w-[767px] lg:w-[1023px] xl:w-[1400px] mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} animate={true} />
      </Routes>
      <TooltipProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Tooltips />
      </TooltipProvider>
    </main>
  );
}

export default App;
