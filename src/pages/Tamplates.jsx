import Navbar from "../components/navigation/Navbar";
import { Link } from "react-router-dom";
import { useUser } from "../utils/hooks/userInfo";
const Tamplates = () => {
  const { user } = useUser();
  const template = [1, 2, 3, 4];
  return (
    <>
      <Navbar />
      <section>
        <h2 className=" text-2xl font-semibold mb-8 mt-20">
          Pree build tmaplates
        </h2>

        <div className="flex justify-start items-center space-x-6">
          {template.map(() => {
            return (
              <div className=" w-[320px] p-5 rounded-lg bg-light dark:bg-dark hover:scale-105 duration-700 cursor-pointer">
                <p className=" text-xl font-semibold mb-3 ">Save Tamplates</p>
                <p className="h-24 overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  deleniti enim. Deleniti, enim shit that passless. deleniti
                  enim. Deleniti, enim shit
                </p>
              </div>
            );
          })}
        </div>

        <hr className="my-10 border-light dark:border-dark w-full" />

        <h2 className=" text-2xl font-semibold mb-8 ">Your tmaplates</h2>

        <div className="flex justify-start items-center space-x-6">
          {user ? (
            <div className=" w-[320px] p-5 rounded-lg bg-light dark:bg-dark hover:scale-105 duration-700 cursor-pointer">
              <p className=" text-xl font-semibold mb-3 ">Save Tamplates</p>
              <p className="h-24 overflow-hidden">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                deleniti enim. Deleniti, enim shit that passless. deleniti enim.
                Deleniti, enim shit
              </p>
            </div>
          ) : (
            <Link
              to="/signup"
              className=" w-full text-2xl text-center block mt-12"
            >
              Create Account
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

export default Tamplates;
