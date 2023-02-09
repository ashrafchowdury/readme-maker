import {
    BiFile,
    BiDownload,
    BiReceipt,
    BiCopyAlt,
    BiChevronDown,
  } from "react-icons/bi";

const Feature = () => {
  const data = [
    {
      icon: <BiFile className=" text-3xl" />,
      title: "Save Tamplates",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, enim. Deleniti, enim shit that passless.",
    },
    {
      icon: <BiDownload className=" text-3xl" />,
      title: "Download File",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, enim. Deleniti, enim shit that passless.",
    },
    {
      icon: <BiReceipt className=" text-3xl" />,
      title: "Custom Selector",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, enim. Deleniti, enim shit that passless.",
    },
    {
      icon: <BiCopyAlt className=" text-3xl" />,
      title: "Copy Data",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, enim. Deleniti, enim shit that passless.",
    },
  ];
  return (
    <>
      {data.map((value) => {
        return (
          <div className=" w-[290px] h-[250px] text-center p-4 rounded-lg hover:scale-105 duration-700 cursor-default">
            <div className=" bg-light dark:bg-dark w-[52px] h-[52px] rounded-lg flex justify-center items-center mx-auto mb-6">
              {value.icon}
            </div>
            <p className=" text-xl font-semibold mb-3 ">{value.title}</p>
            <p>{value.desc}</p>
          </div>
        );
      })}
    </>
  );
};

export default Feature;
