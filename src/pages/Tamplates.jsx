import Navbar from "../components/navigation/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../utils/hooks/userInfo";
import Loading from "../components/utils/Loading";
import { BiTrash } from "react-icons/bi";
import { useTemplate } from "../utils/hooks/useTemplate";

const Tamplates = () => {
  const { user } = useUser();
  const { templates, loading, deleteTemplate } = useTemplate(user);
  const navigate = useNavigate();
  const handleTeleport = () => {
    navigate("/editor");
  };
  const template = [1, 2, 3, 4];
  return (
    <>
      <Navbar />
      <section>
        <h2 className=" text-2xl font-semibold mb-8 mt-20">
          Pree build tmaplates
        </h2>

        <div className="flex flex-wrap justify-start items-center space-x-6">
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
            <>
              {templates.length != 0 ? (
                <>
                  {templates?.map((value) => {
                    return (
                      <div
                        key={value?.$id}
                        className=" w-[320px] relative p-5 rounded-lg bg-light dark:bg-dark hover:scale-105 duration-700 cursor-pointer"
                        onClick={handleTeleport}
                      >
                        <button
                          className=" p-[6px] rounded-lg bg-lightBg dark:bg-darkBg absolute top-3 right-3 hover:bg-red-500 dark:hover:bg-red-500 duration-500"
                          onClick={() => deleteTemplate(value?.$id)}
                        >
                          <BiTrash className="text-[16px]" />
                        </button>
                        <p className=" text-xl font-semibold mb-3 ">
                          {value?.title}
                        </p>
                        <p className="h-24 overflow-hidden">
                          {value?.description}
                        </p>
                      </div>
                    );
                  })}
                </>
              ) : (
                <p className=" mt-5 text-xl">Empaty Templates</p>
              )}
            </>
          ) : (
            <Link
              to="/signup"
              className=" w-full text-2xl text-center block mt-12"
            >
              Create Account
            </Link>
          )}
        </div>
        <Loading load={loading} style="text-3xl my-12" />
      </section>
    </>
  );
};

export default Tamplates;
