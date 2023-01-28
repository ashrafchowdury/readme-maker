import { useState, useEffect } from "react";
import { BiSun, BiMoon, BiQuestionMark } from "react-icons/bi";

const Navbar = () => {
  //use for change the theme
  const [theme, settheme] = useState("dark");
  //   console.log(theme);
  useEffect(() => {
    //Handle the Theme when the page load
    const handleDark = () => {
      //check in LS theme equal to dark or not
      // and also check default media preference
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
    //add dark theme on localStorage
    localStorage.setItem("theme", "dark");
    settheme("dark");
  };

  //handle Light theme
  const handleLightTheme = () => {
    //add light theme on localStorage
    localStorage.setItem("theme", "light");
    settheme("light");
  };
  return (
    <nav className=" w-full h-[100px] flex justify-between items-center">
      <h1 className=" text-2xl lg lg:text-4xl font-bold ">Readme Maker</h1>
      <div className=" flex items-center space-x-3">
        <button className=" w-9 h-9 flex justify-center items-center rounded-lg bg-light dark:bg-dark ring-light dark:ring-dark focus:ring-2 text-xl duration-500">
          <BiQuestionMark />
        </button>
        <button
          className=" w-9 h-9 flex justify-center items-center rounded-lg bg-light dark:bg-dark ring-light dark:ring-dark focus:ring-2 text-xl duration-500"
          onClick={theme == "dark" ? handleLightTheme : handleDarkTheme}
        >
          {theme == "dark" ? <BiSun /> : <BiMoon />}
        </button>
        <button className=" py-2 px-7 rounded-lg font-bold bg-primary text-lightBg">
          Create Account
        </button>
        {/* <button>Profile</button>
        <div>
          <button>Profile</button>
          <button>Tamplates</button>
                  <button>
          <BiQuestionMark />
        </button>
        <button>
          <BiSun />
        </button>
          <button>Log Out</button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
