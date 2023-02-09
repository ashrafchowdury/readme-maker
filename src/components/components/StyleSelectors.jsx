import { FaStar } from "react-icons/fa";

export const StyleSelectors = () => {
  const styles = [
    "Text",
    "Heading 1",
    "Heading 2",
    "Bullet List",
    "Number List",
    "Links",
    "Icons",
    "Image",
    "Code",
    "Embeds",
  ];
  return (
    <>
      {styles.map((value) => {
        return (
          <div className=" flex items-center my-2">
            <FaStar className=" text-lg" />{" "}
            <span className=" ml-2">{value}</span>
          </div>
        );
      })}
    </>
  );
};

export const SelectorTag = ({ style, icon, title, sub }) => {
  return (
    <>
      <div
        className={`w-[220px] h-[65px] p-3 flex items-center bg-lightBg dark:bg-darkBg rounded-lg absolute ${style} shadow-md shadow-light dark:shadow-dark`}
      >
        <div className=" w-[42px] h-[42px] rounded-md bg-light dark:bg-dark flex items-center justify-center">
          {icon}
        </div>
        <div className=" ml-4">
          <p className=" font-semibold mb-1">{title}</p>
          <p className="text-xs">{sub}</p>
        </div>
      </div>
    </>
  );
};
