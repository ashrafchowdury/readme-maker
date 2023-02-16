import { useState, useEffect } from "react";
import { BiFile, BiHighlight, BiLoaderCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useUser } from "../../utils/hooks/userInfo";
import { database } from "../../appwrite/appwriteConfig";

const Aside = ({ sidebar, setValue }) => {
  const { user } = useUser();
  const [templates, settemplates] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const handleGetTemplate = async () => {
      try {
        setloading(true);
        const getData = await database.listDocuments(
          "63eb228016758764c7f1",
          "63eb2297eb0ff8f8cc79"
        );
        settemplates(getData.documents);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    handleGetTemplate();
  }, []);
  const template = [1, 2, 3, 4];
  if (sidebar) {
    return (
      <>
        <aside className=" absolute top-24 right-0 lg:top-0  lg:relative dark:bg-darkBg flex flex-col justify-between items-start w-[320px] lg:w-[360px] xl:w-[400px] h-[89vh] border border-light dark:border-dark rounded-lg ml-2 py-4 px-4">
          <section className=" w-full">
            <p className=" text-xl font-bold mb-6">Pree Build Tamplates</p>
            {template.map(() => {
              return (
                <div className=" flex items-center bg-light dark:bg-dark py-2 px-3 rounded-lg my-4 cursor-pointer">
                  <BiFile className=" text-xl" />{" "}
                  <p className=" ml-2 text-lg">Personal Readme</p>
                </div>
              );
            })}

            <p className=" text-xl font-bold mt-8 mb-6">Your Tamplates</p>
            {templates.map((value) => {
              return (
                <>
                  {user ? (
                    <>
                      <div
                        key={value?.$id}
                        onClick={() => setValue(value["readme-template"])}
                        className=" flex items-center bg-light dark:bg-dark py-2 px-3 rounded-lg my-4 overflow-hidden whitespace-nowrap cursor-pointer"
                      >
                        <BiFile className=" text-xl" />{" "}
                        <p className=" ml-2 text-lg">{value?.title}</p>
                      </div>
                    </>
                  ) : (
                    <Link to="/signup">Create Account</Link>
                  )}
                </>
              );
            })}
            {loading && (
              <BiLoaderCircle className=" text-2xl animate-spin mx-auto my-8" />
            )}
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
