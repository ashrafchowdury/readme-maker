import React from "react";
import { GoTextSize } from "react-icons/go";
import {
  FaHeading,
  FaRegListAlt,
  FaCode,
  FaTable,
  FaRegImage,
} from "react-icons/fa";
import {
  BiListOl,
  BiImages,
  BiWindowAlt,
  BiHorizontalCenter,
} from "react-icons/bi";
const Selector = ({
  condition,
  setisSelector,
  setselectIcons,
  placeholder,
  setplaceholder,
}) => {
  const selectors = [
    {
      styleName: "ql-header",
      icon: <FaHeading className=" !text-2xl" />,
      title: "Heading 1",
      des: "Big Header",
      value: 1,
    },
    {
      styleName: "ql-header",
      icon: <FaHeading className=" text-2xl" />,
      title: "Heading 2",
      des: "Medium Header",
      value: 2,
    },
    {
      styleName: "ql-list",
      icon: <FaRegListAlt className=" text-2xl" />,
      title: "Bullet List",
      des: "Create Simple Bullet List",
      value: "bullet",
    },
    {
      styleName: "ql-list",
      icon: <BiListOl className=" text-2xl" />,
      title: "Number List",
      des: "Create Simple Number List",
      value: "ordered",
    },
    {
      styleName: "ql-iconHandler",
      icon: <BiImages className=" text-2xl" />,
      title: "Icons",
      des: "Insert Your Skills Icons",
      component: "icons",
    },
    {
      styleName: "ql-imageHandler",
      icon: <FaRegImage className=" text-2xl" />,
      title: "Image",
      des: "Upload An Image",
    },
    {
      styleName: "ql-code-block",
      icon: <FaCode className=" text-2xl" />,
      title: "Code Block",
      des: "Write Code",
    },
    {
      styleName: "ql-video",
      icon: <BiWindowAlt className=" text-2xl" />,
      title: "Embed",
      des: "Embed Something",
    },
    {
      styleName: "ql-dividerInsert",
      icon: <BiHorizontalCenter className=" text-2xl rotate-90" />,
      title: "Divider",
      des: "Add Divider Between To Block",
    },
    // {
    //   styleName: "ql-table",
    //   icon: <FaTable className=" text-2xl" />,
    //   title: "Table",
    //   des: "Create A Simple Table",
    // },
    // {
    //   styleName: "ql-",
    //   icon: "",
    //   title: "",
    //   des: "",
    // },
  ];

  const handleRemoveSelactor = (component, styleName) => {
    setisSelector(false);
    component == "icons" && setselectIcons(true);
    if (styleName == "ql-header" || styleName == "") {
      setplaceholder({ ...placeholder, display: true });
    } else {
      setplaceholder({ ...placeholder, display: false });
    }
  };
  return (
    <section
      className={`selection ${condition} w-[350px] h-[380px] bg-light dark:bg-dark rounded-lg p-4 overflow-auto`}
    >
      <p className=" text-xl font-semibild mb-2">Selectors</p>
      {selectors.map((value) => {
        return (
          <button
            className={value.styleName}
            value={value?.value}
            onClick={() =>
              handleRemoveSelactor(value?.component, value.styleName)
            }
          >
            <div className="flex items-center cursor-pointer">
              <div className=" w-[55px] h-[55px] rounded-md bg-lightBg dark:bg-darkBg flex items-center justify-center">
                {value.icon}
              </div>
              <div className=" ml-4">
                <p className=" text-lg mb-1">{value.title}</p>
                <p className="text-sm">{value.des}</p>
              </div>
            </div>
          </button>
        );
      })}
    </section>
  );
};

export default Selector;
