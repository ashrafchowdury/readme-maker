import Navbar from "../components/navigation/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <header className=" mt-28 flex flex-col justify-between items-center">
        <div className=" w-[1000px] text-center">
          <h1 className=" text-7xl leading-[85px] font-bold ">
            Make your <span className=" text-primary">Readme.md</span> file with
            in a minute
          </h1>
          <h2></h2>
          <p className=" my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            accusantium molestiae perspiciatis neque quisquam odit, ratione nam
            a sequi pariatur reiciendis harum nisi quas aliquam adipisci id iste
            quod expedita!
          </p>
          <button className=" py-2 px-7 rounded-lg font-bold bg-primary text-lightBg mt-10">
            Create Readme File
          </button>
        </div>
        <img
          src="header1.png"
          alt=""
          className=" border-4 border-dark w-[80%] rounded-2xl mt-16 shadow-2xl drop-shadow-2xl shadow-slate-600 "
        />
      </header>
      <section className=" h-[250px] bg-dark flex justify-between items-center my-16 rounded-lg p-7">
        <div className=" w-[260px] h-[180px] bg-darkBg rounded-lg p-5">
          <p className=" text-xl font-semibold mb-3 ">Save Tamplates</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
            enim. Deleniti, enim.
          </p>
        </div>
      </section>
      <main></main>
      <section></section>
      <footer></footer>
    </>
  );
};
export default Home;
