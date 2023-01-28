import React from "react";

const IconsSelector = ({ selectIcons, setselectIcons, position }) => {
  const skills = ["javascript", "react", "nextjs", 'html'];
  return (
    <section
      className=" absolute z-20 w-[500px] bg-light dark:bg-dark rounded-lg p-7 flex flex-col items-center justify-center"
      // style={{
      //   top: position.y,
      //   left: position.x,
      // }}
    >
      <p className=" text-xl font-semibold mb-6">Select Icons</p>
      <input
        type="text"
        placeholder="Add your language name"
        className=" py-3 px-4 rounded-lg bg-lightBg dark:bg-darkBg mb-3 w-full"
      />
      <input
        type="text"
        placeholder="Add Link"
        className=" py-3 px-4 rounded-lg bg-lightBg dark:bg-darkBg mb-4 w-full"
      />
      <div className=" flex space-x-3">
        <input
          type="number"
          placeholder="Width"
          className=" py-3 px-4 rounded-lg bg-lightBg dark:bg-darkBg mb-4 w-full"
        />
        <input
          type="number"
          placeholder="Height"
          className=" py-3 px-4 rounded-lg bg-lightBg dark:bg-darkBg mb-4 w-full"
        />
      </div>
      <div className=" flex w-full">
        {skills.map((val) => {
          return (
            <img
              src={`https://skillicons.dev/icons?i=${val}`}
              className=" w-12 m-2"
            />
          );
        })}
      </div>
      {skills.length == 0 ? (
        <button
          onClick={() => setselectIcons(false)}
          className=" flex items-center justify-center font-semibold w-full py-2 rounded-lg bg-lightBg dark:bg-darkBg hover:bg-primary dark:hover:bg-primary duration-500 mt-6"
        >
          Cancel
        </button>
      ) : (
        <button
          onClick={() => setselectIcons(false)}
          className=" flex items-center justify-center font-semibold w-full py-2 rounded-lg bg-lightBg dark:bg-darkBg hover:bg-primary dark:hover:bg-primary duration-500 mt-6"
        >
          Add Icons
        </button>
      )}
    </section>
  );
};

export default IconsSelector;
