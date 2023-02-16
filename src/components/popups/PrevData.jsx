import { useState } from "react";
import { HiX } from "react-icons/hi";

const PrevData = ({ setprevPopup, setValue }) => {
  const [data, setdata] = useState("");
  return (
    <section className="popup">
      <div className=" w-[700px] bg-lightBg dark:bg-darkBg p-9 rounded-xl relative">
        <div className="w-full mb-9 flex justify-between items-center">
          <p className=" text-2xl font-medium ">Add Previous Data</p>
          <button
            onClick={() => setprevPopup(false)}
            className=" p-2 rounded-lg bg-primary"
          >
            <HiX className=" text-xl" />
          </button>
        </div>

        <textarea
          type="text"
          placeholder="Add Previous Data"
          className="w-full h-[180px] px-5 py-5 rounded-lg bg-light dark:bg-dark mt-2 outline-transparent"
          onChange={(e) => setdata(e.target.value)}
          value={data}
        />

        <button
          className="w-full bg-primary text-white font-semibold rounded-lg px-4 py-3 mt-9"
          onClick={() => {
            setValue(data);
            setprevPopup(false);
          }}
        >
          Add Data
        </button>
      </div>
    </section>
  );
};

export default PrevData;
