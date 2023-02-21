import { BiFile, BiHighlight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useUser } from "../../utils/hooks/userInfo";
import Loading from "../utils/Loading";
import { useEditor } from "../../utils/hooks/useEditor";
import { useTemplate } from "../../utils/hooks/useTemplate";

const Aside = () => {
  const { user } = useUser();
  const { value, setValue, editor, seteditor } = useEditor();
  const { templates, loading } = useTemplate(user);

  const handleClean = () => {
    if (value.length > 12) {
      const conformation = window.confirm("Save Template");
      conformation && seteditor({ ...editor, save: true });
    }
  };
  const template = [1, 2, 3, 4];
  if (editor.sidebar) {
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
          <button
            className=" flex items-center justify-center font-semibold w-full py-2 rounded-lg bg-light dark:bg-dark hover:bg-primary dark:hover:bg-primary duration-500"
            onClick={handleClean}
          >
            <BiHighlight className=" text-xl mr-2" /> Create A New Draft
          </button>
        </aside>
      </>
    );
  }
};

export default Aside;
