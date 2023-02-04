import React from "react";
import { BiFile, BiHighlight } from "react-icons/bi";


const Aside = ({ sidebar }) => {
  if (sidebar) {
    return (
      <>
        <aside className=" absolute top-24 right-0 lg:top-0  lg:relative dark:bg-darkBg flex flex-col justify-between items-start w-[320px] lg:w-[360px] xl:w-[400px] h-[89vh] border border-light dark:border-dark rounded-lg ml-2 py-4 px-4">
          <section className=" w-full">
            <p className=" text-xl font-bold mb-6">Pree Build Tamplates</p>
            <div className=" flex items-center bg-light dark:bg-dark py-2 px-3 rounded-lg my-3">
              <BiFile className=" text-xl" />{" "}
              <p className=" ml-2 text-lg">Personal Readme</p>
            </div>
            <div className=" flex items-center bg-light dark:bg-dark py-2 px-3 rounded-lg my-3">
              <BiFile className=" text-xl" />{" "}
              <p className=" ml-2 text-lg">Personal Readme</p>
            </div>
            <div className=" flex items-center bg-light dark:bg-dark py-2 px-3 rounded-lg my-3">
              <BiFile className=" text-xl" />{" "}
              <p className=" ml-2 text-lg">Personal Readme</p>
            </div>

            <p className=" text-xl font-bold mt-8 mb-6">Your Tamplates</p>
            <div className=" flex items-center bg-light dark:bg-dark py-2 px-3 rounded-lg my-3">
              <BiFile className=" text-xl" />{" "}
              <p className=" ml-2 text-lg">Personal Readme</p>
            </div>
            <div className=" flex items-center bg-light dark:bg-dark py-2 px-3 rounded-lg my-3">
              <BiFile className=" text-xl" />{" "}
              <p className=" ml-2 text-lg">Personal Readme</p>
            </div>
          </section>
          <button className=" flex items-center justify-center font-semibold w-full py-2 rounded-lg bg-light dark:bg-dark hover:bg-primary dark:hover:bg-primary duration-500">
            <BiHighlight className=" text-xl mr-2" /> Create A New Draft
          </button>
        </aside>
      </>
    );
  }
};

export default Aside;
