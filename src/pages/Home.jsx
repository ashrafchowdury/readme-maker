import Navbar from "../components/navigation/Navbar";
import { BiFile, BiDownload, BiReceipt, BiCopyAlt } from "react-icons/bi";
import {
  FaStar,
  FaHeading,
  FaCode,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaLaptopCode,
} from "react-icons/fa";

const Home = () => {

  return (
    <>
      <Navbar />
      <header className=" mt-28 flex flex-col justify-between items-center">
        <div className=" w-[1000px] text-center">
          <h1 className=" text-7xl leading-[85px] font-bold ">
            Make your <span className=" text-primary">Readme.md</span> file with
            in a minutes
          </h1>
          <h2></h2>
          <p className=" my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            accusantium molestiae perspiciatis neque quisquam odit, ratione nam
            a sequi pariatur reiciendis harum nisi quas aliquam adipisci id iste
            quod expedita!
          </p>
          <button
            className=" py-2 px-7 rounded-lg font-bold bg-primary text-lightBg mt-10"
          >
            Create Readme File
          </button>
        </div>
        <img
          src="header1.png"
          alt=""
          className=" border-4 border-dark w-[80%] rounded-2xl mt-16 shadow-2xl drop-shadow-2xl shadow-slate-600 "
        />
      </header>

      <section className=" h-[80vh] my-12 text-center flex flex-col justify-center items-center">
        <p className=" text-primary font-semibold mb-4">FEATURES</p>
        <h2 className=" text-5xl font-bold mb-7 ml-5">
          What makes us so special?
        </h2>
        <p>
          There are plenty of benefits when using React maker. We tried to list
          some of them out.
        </p>

        <div className="flex justify-center items-center space-x-9 mt-16">
          <div className=" w-[290px] h-[250px] text-center p-4 rounded-lg hover:scale-105 duration-700 cursor-default">
            <div className=" bg-dark w-[52px] h-[52px] rounded-lg flex justify-center items-center mx-auto mb-6">
              <BiFile className=" text-3xl" />
            </div>
            <p className=" text-xl font-semibold mb-3 ">Save Tamplates</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deleniti, enim. Deleniti, enim shit that passless.
            </p>
          </div>
          <div className=" w-[290px] h-[250px] text-center p-4 rounded-lg hover:scale-105 duration-700 cursor-default">
            <div className=" bg-dark w-[52px] h-[52px] rounded-lg flex justify-center items-center mx-auto mb-6">
              <BiDownload className=" text-3xl" />
            </div>
            <p className=" text-xl font-semibold mb-3 ">Download File</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deleniti, enim. Deleniti, enim shit that passless.
            </p>
          </div>
          <div className=" w-[290px] h-[250px] text-center p-4 rounded-lg hover:scale-105 duration-700 cursor-default">
            <div className=" bg-dark w-[52px] h-[52px] rounded-lg flex justify-center items-center mx-auto mb-6">
              <BiReceipt className=" text-3xl" />
            </div>
            <p className=" text-xl font-semibold mb-3 ">Custom Selector</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deleniti, enim. Deleniti, enim shit that passless.
            </p>
          </div>
          <div className=" w-[290px] h-[250px] text-center p-4 rounded-lg hover:scale-105 duration-700 cursor-default">
            <div className=" bg-dark w-[52px] h-[52px] rounded-lg flex justify-center items-center mx-auto mb-6">
              <BiCopyAlt className=" text-3xl" />
            </div>
            <p className=" text-xl font-semibold mb-3 ">Copy Data</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deleniti, enim. Deleniti, enim shit that passless.
            </p>
          </div>
        </div>
      </section>

      <section className="h-[80vh] my-12 flex justify-between items-center">
        <div className=" w-[550px] h-[520px] relative bg-dark rounded-lg">
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

      <section className="h-[80vh] my-12 flex justify-between items-center">
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
        <div className=" w-[580px] h-[520px] relative bg-dark rounded-lg">
          <div className=" py-4 px-6 w-[300px] rounded-lg bg-darkBg drop-shadow-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <p className=" text-xl font-medium mb-5">Styles</p>
            <div className=" flex items-center my-2">
              <FaStar className=" text-lg" />{" "}
              <span className=" ml-2">Text</span>
            </div>
            <div className=" flex items-center my-2">
              <FaStar className=" text-lg" />{" "}
              <span className=" ml-2">Heading 1</span>
            </div>
            <div className=" flex items-center my-2">
              <FaStar className=" text-lg" />{" "}
              <span className=" ml-2">Heading 2</span>
            </div>
            <div className=" flex items-center my-2">
              <FaStar className=" text-lg" />{" "}
              <span className=" ml-2">Bullet List</span>
            </div>
            <div className=" flex items-center my-2">
              <FaStar className=" text-lg" />{" "}
              <span className=" ml-2">Number List</span>
            </div>
            <div className=" flex items-center my-2">
              <FaStar className=" text-lg" />{" "}
              <span className=" ml-2">Links</span>
            </div>
            <div className=" flex items-center my-2">
              <FaStar className=" text-lg" />{" "}
              <span className=" ml-2">Icons</span>
            </div>
            <div className=" flex items-center my-2">
              <FaStar className=" text-lg" />{" "}
              <span className=" ml-2">Image</span>
            </div>
            <div className=" flex items-center my-2">
              <FaStar className=" text-lg" />{" "}
              <span className=" ml-2">Code</span>
            </div>
            <div className=" flex items-center my-2">
              <FaStar className=" text-lg" />{" "}
              <span className=" ml-2">Embeds</span>
            </div>
          </div>

          <div className="w-[220px] h-[65px] p-3 flex items-center bg-darkBg rounded-lg absolute top-7 right-9 shadow-md shadow-dark">
            <div className=" w-[42px] h-[42px] rounded-md bg-lightBg dark:bg-dark flex items-center justify-center">
              <FaHeading />
            </div>
            <div className=" ml-4">
              <p className=" mb-1">Heading 1</p>
              <p className="text-xs">Big Header</p>
            </div>
          </div>

          <div className="w-[220px] h-[65px] p-3 flex items-center bg-darkBg rounded-lg absolute bottom-4 left-5 shadow-xl shadow-dark">
            <div className=" w-[42px] h-[42px] rounded-md bg-lightBg dark:bg-dark flex items-center justify-center">
              <FaCode />
            </div>
            <div className=" ml-4">
              <p className=" mb-1">Code Block</p>
              <p className="text-xs">Add Codes</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" h-[80vh] my-12 text-center flex flex-col justify-center items-center">
        <p className=" text-primary font-semibold mb-4">TESTIMONIALS</p>
        <h2 className=" text-5xl font-bold mb-7 ml-5">
          People love using Reademe Maker
        </h2>
        <p>
          Here are some nice things our users have said about our Editor.
          (totally fake).
        </p>

        <div className="flex justify-center items-center space-x-9 mt-24">
          <div className=" w-[400px] h-[220px] text-start p-6 rounded-lg bg-dark cursor-default">
            <div className=" flex items-center mb-5">
              <img
                src="https://pbs.twimg.com/profile_images/1564855868012654593/3qgdCKAr_400x400.jpg"
                alt=""
                className=" w-12 h-12 rounded-full mr-3"
              />
              <div>
                <p>Ashraf ⚡️💻</p>
                <p>@Ashraf_365</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas
              expedita eos dolor tempora, autem delectus illum explicabo saepe
              voluptatem?
            </p>
          </div>
          <div className=" w-[400px] h-[220px] text-start p-6 rounded-lg bg-dark cursor-default">
            <div className=" flex items-center mb-5">
              <img
                src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/278958151_1151446615808551_3460948444864851225_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH7aQEkW03aSqHAU7u_DFNfIDmD5FdFWCYgOYPkV0VYJjrCJoTLWCIwPEiKnTLrCXN3aytWylmEbQ8Jxo2UkZQD&_nc_ohc=aAyVeq6S4coAX8s1kB8&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfAo4RL-4et4JiX7pgo8qC62ovRFIhSVjLRADvZ6AgHBUw&oe=63E759F9"
                alt=""
                className=" w-12 h-12 rounded-full mr-3"
              />
              <div>
                <p>Sahil Chowdury</p>
                <p>@dsahilchowdury</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas
              expedita eos dolor tempora, autem delectus illum explicabo saepe
              voluptatem?
            </p>
          </div>
          <div className=" w-[400px] h-[220px] text-start p-6 rounded-lg bg-dark cursor-default">
            <div className=" flex items-center mb-5">
              <img
                src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/279507988_1151447079141838_912784402980314542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHAbvZJDECkrsFUay5tXpQ8CcfFFHJwYyoJx8UUcnBjKmBkAoYXQtLwoSFSKgSwBkmu1biiWn6IQFKawzafsqsn&_nc_ohc=v3gDBuwQFpsAX-K3yfc&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfANAY2p_sTrziR8GkCBt-uPVDLzVT0xSMJTECW9nWmF9Q&oe=63E61462"
                alt=""
                className=" w-12 h-12 rounded-full mr-3"
              />
              <div>
                <p>Denil Dev 🚀👨🏻‍💻</p>
                <p>@denildev</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas
              expedita eos dolor tempora, autem delectus illum explicabo saepe
              voluptatem?
            </p>
          </div>
        </div>
      </section>

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
