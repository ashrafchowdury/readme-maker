import { useState, useEffect } from "react";
import {
  BiSun,
  BiMoon,
  BiQuestionMark,
  BiSidebar,
  BiChevronDown,
} from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import Icons from "../utils/Icons";
import { useLocation, Link } from "react-router-dom";
import { useUser } from "../../utils/hooks/userInfo";
import { account } from "../../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = ({ setsidebar }) => {
  const [theme, settheme] = useState("dark");
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user, setuser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const handleWindowClick = (event) => {
      if (open && !event.target.closest(".relative")) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [open]);
  useEffect(() => {
    //Handle the Theme when the page load
    const handleDark = () => {
      //check in LS theme equal to dark or not
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches) // check the media is dark or not
      ) {
        settheme("dark");
        //add class name on html tag
        document.querySelector("html").classList.add("dark");
      } else {
        settheme("light");
        //remove class name form html tag
        document.querySelector("html").classList.remove("dark");
      }
    };
    handleDark();
  }, [theme]);

  //handle Dark theme
  const handleDarkTheme = () => {
    localStorage.setItem("theme", "dark");
    settheme("dark");
  };
  //handle Light theme
  const handleLightTheme = () => {
    localStorage.setItem("theme", "light");
    settheme("light");
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      setuser(null);
      toast.success("Logout successfully 🤝");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something was wrong!");
    }
  };
  console.log(user);

  return (
    <nav className=" w-full h-[100px] flex justify-between items-center">
      <Link to="/">
        <h1 className=" text-2xl lg lg:text-4xl font-bold ">Readme Maker</h1>
      </Link>

      <div className="navIcons flex items-center space-x-3">
        {location.pathname == "/editor" ? (
          <Icons
            click={() => setsidebar((prev) => (prev == true ? false : true))}
            style="w-9 h-9 flex justify-center items-center rounded-lg bg-light dark:bg-dark ring-light dark:ring-dark focus:ring-2 text-xl duration-500"
            content="SideBar"
          >
            <BiSidebar />
          </Icons>
        ) : (
          <Icons
            style="w-9 h-9 flex justify-center items-center rounded-lg bg-light dark:bg-dark ring-light dark:ring-dark focus:ring-2 text-xl duration-500"
            content="Create An Issue"
          >
            <FaGithub />
          </Icons>
        )}

        <Icons
          click={theme == "dark" ? handleLightTheme : handleDarkTheme}
          style="w-9 h-9 flex justify-center items-center rounded-lg bg-light dark:bg-dark ring-light dark:ring-dark focus:ring-2 text-xl duration-500"
        >
          {theme == "dark" ? <BiSun /> : <BiMoon />}
        </Icons>

        {user ? (
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center py-2 px-6 rounded-lg font-bold bg-primary text-lightBg"
            >
              <span>{user?.email?.slice(0, user.email?.indexOf("@"))}</span>
              <BiChevronDown className=" text-2xl ml-3" />
            </button>
            {open && (
              <div className="absolute z-30 right-0 w-full mt-2 origin-top-right rounded-lg shadow-lg">
                <div className="px-2 py-2 bg-light dark:bg-dark rounded-lg shadow flex flex-col space-y-2">
                  <Link
                    to="/profile"
                    className="px-4 py-2 font-semibold hover:bg-lightBg hover:dark:bg-darkBg rounded-lg duration-300"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/tamplates"
                    className="px-4 py-2 font-semibold hover:bg-lightBg hover:dark:bg-darkBg rounded-lg duration-300"
                  >
                    Tamplates
                  </Link>
                  <button
                    className="px-4 py-2 text-start font-semibold hover:bg-lightBg hover:dark:bg-darkBg rounded-lg duration-300"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link to="/signup">
            <button className=" py-2 px-7 rounded-lg font-bold bg-primary text-lightBg">
              Create Account
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
