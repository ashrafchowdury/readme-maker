import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Tooltips from "./components/utils/Tooltips";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Signup from "./pages/Signup";
import Tamplates from "./pages/Tamplates";
import Profile from "./pages/Profile";
import UserDataProvider from "./utils/hooks/userInfo";
import EditorDataProvider from "./utils/hooks/useEditor";
function App() {
  return (
    <main className=" w-[90%] sm:w-[550px] md:w-[767px] lg:w-[1023px] xl:w-[1400px] mx-auto">
      <TooltipProvider>
        <UserDataProvider>
          <EditorDataProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/editor" element={<Editor />} animate={true} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/tamplates" element={<Tamplates />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </EditorDataProvider>
        </UserDataProvider>

        <Toaster position="top-center" reverseOrder={false} />
        <Tooltips />
      </TooltipProvider>
    </main>
  );
}

export default App;
