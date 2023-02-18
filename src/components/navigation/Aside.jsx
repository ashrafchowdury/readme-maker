import { useState, useEffect } from "react";
import { BiFile, BiHighlight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useUser } from "../../utils/hooks/userInfo";
import { database } from "../../appwrite/appwriteConfig";
import { Query } from "appwrite";
import Loading from "../utils/Loading";
const Aside = ({ sidebar, setValue }) => {
  const { user } = useUser();
  const [templates, settemplates] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const handleGetTemplate = async () => {
      try {
        setloading(true);
        const query = [
          Query.equal(
            "user",
            `${user?.email?.slice(0, user.email?.indexOf("@"))}`
          ),
        ];
        const getData = await database.listDocuments(
          "63eb228016758764c7f1",
          "63eb2297eb0ff8f8cc79",
          query
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

            {user ? (
              <>
                {templates.length != 0 ? (
                  <>
                    {templates?.map((value) => {
                      return (
                        <div
                          key={value?.$id}
                          onClick={() => setValue(value["readme-template"])}
                          className=" flex items-center bg-light dark:bg-dark py-2 px-3 rounded-lg my-4 overflow-hidden whitespace-nowrap cursor-pointer"
                        >
                          <BiFile className=" text-xl" />{" "}
                          <p className=" ml-2 text-lg">{value?.title}</p>
                        </div>
                      );
                    })}
                    <Loading load={loading} style="text-2xl my-8" />
                  </>
                ) : (
                  <p className=" mt-5 text-sm">Empaty Templates</p>
                )}
              </>
            ) : (
              <Link to="/signup">Create Account</Link>
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
