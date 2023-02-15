import Navbar from "../components/navigation/Navbar";
import {
  FaStar,
  FaHeading,
  FaCode,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaLaptopCode,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../components/components/Header";
import Feature from "../components/components/Feature";
import FQA from "../components/components/FQA";
import Review from "../components/components/Review";
import {
  StyleSelectors,
  SelectorTag,
} from "../components/components/StyleSelectors";
import { useUser } from "../utils/hooks/userInfo";

const Home = () => {
  const { user } = useUser();
  // console.log(user);
  return (
    <>
      <Navbar />
      <header className=" mt-28 flex flex-col justify-between items-center">
        <div className=" w-[1000px] text-center">
          <h1 className=" text-7xl leading-[85px] font-bold ">
            Make your <span className=" text-primary">Readme.md</span> file with
            in a minutes
          </h1>
          <p className=" my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            accusantium molestiae perspiciatis neque quisquam odit, ratione nam
            a sequi pariatur reiciendis harum nisi quas aliquam adipisci id iste
            quod expedita!
          </p>
          <Link to="/editor">
            <button className=" py-2 px-7 rounded-lg font-bold bg-primary text-lightBg mt-10">
              Create Readme File
            </button>
          </Link>
        </div>
        <img
          src="header1.png"
          alt=""
          className=" border-4 border-dark w-[80%] rounded-2xl mt-16 shadow-2xl drop-shadow-2xl shadow-slate-600 "
        />
      </header>

      <section className=" h-[80vh] my-12 text-center flex flex-col justify-center items-center">
        <Header
          section="FEATURES"
          title=" What makes us so special?"
          desc="There are plenty of benefits when using React maker. We tried to list
          some of them out."
        />

        <div className="flex justify-center items-center space-x-9 mt-16">
          <Feature />
        </div>
      </section>

      <section className="h-[80vh] w-[1250px] mx-auto my-12 flex justify-between items-center">
        <div className=" w-[550px] h-[520px] relative bg-light dark:bg-dark rounded-lg">
          <img
            src="inline.png"
            alt=""
            className=" rounded-lg mb-5 shadow-lg shadow-darkBg absolute top-16 right-6 z-10"
          />
          <img
            src="selector.png"
            alt=""
            className=" rounded-lg shadow-xl shadow-darkBg absolute top-[50%] left-[40%] translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
        <div className=" w-[600px]">
          <h2 className=" text-4xl font-bold mb-7">Component & Selectors</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            harum impedit tenetur earum molestias iusto corporis consequuntur
            soluta facere illum. Quam neque ipsa impedit odio repellendus. Quasi
            dolore dolorem atque error suscipit assumenda nisi deserunt
            consequatur illo, soluta nam perferendis quis dignissimos iure eius
          </p>
        </div>
      </section>

      <section className="h-[80vh] w-[1250px] mx-auto my-12 flex justify-between items-center">
        <div className=" w-[600px]">
          <h2 className=" text-4xl font-bold mb-7">
            Components to keep things organised
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            harum impedit tenetur earum molestias iusto corporis consequuntur
            soluta facere illum. Quam neque ipsa impedit odio repellendus. Quasi
            dolore dolorem atque error suscipit assumenda nisi deserunt
            consequatur illo, soluta nam perferendis quis dignissimos iure eius
          </p>
        </div>
        <div className=" w-[580px] h-[520px] relative bg-light dark:bg-dark rounded-lg">
          <div className=" py-4 px-6 w-[300px] rounded-lg bg-lightBg dark:bg-darkBg drop-shadow-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <p className=" text-xl font-medium mb-5">Styles</p>
            <StyleSelectors />
          </div>

          <SelectorTag
            style="top-7 right-9"
            icon={<FaHeading />}
            title="Heading 1"
            sub="Big Header"
          />

          <SelectorTag
            style="bottom-4 left-5"
            icon={<FaCode />}
            title="Code Block"
            sub="Add Codes"
          />
        </div>
      </section>

      <section className=" h-[80vh] my-12 text-center flex flex-col justify-center items-center">
        <Header
          section="TESTIMONIALS"
          title="People love using Reademe Maker"
          desc="Here are some nice things our users have said about our Editor.
          (totally fake)."
        />

        <div className="flex justify-center items-center space-x-9 mt-24">
          <Review />
        </div>
      </section>

      <main class="flex flex-col items-center mx-auto my-12 min-h-[70vh] max-h-full">
        <Header
          section="FQA"
          title="Got questions?"
          desc="Here are some nice things our users have said about our Editor.
          (totally fake)."
        />

        <section class="flex flex-col space-y-6 mx-auto w-[850px] mt-24">
          <FQA />
        </section>
      </main>

      <footer className=" flex flex-col justify-center items-center space-y-9 mb-20">
        <p className=" text-2xl font-bold">Readme Maker</p>
        <div className="flex justify-center items-center space-x-5">
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
          <a href="">About Us</a>
        </div>
        <div className=" flex justify-center items-center space-x-7 text-2xl">
          <a href="" target="_blank">
            <FaTwitter />
          </a>
          <a href="" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="" target="_blank">
            <FaGithub />
          </a>
          <a href="" target="_blank">
            <FaLaptopCode />
          </a>
        </div>
        <a
          href=""
          target="_blank"
          className="text-primary font-semibold text-lg"
        >
          Designed & Developed by Ashraf Chowdury
        </a>
      </footer>
    </>
  );
};
export default Home;
