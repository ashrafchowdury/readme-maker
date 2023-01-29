import Navbar from "./components/navigation/Navbar";
import Aside from "./components/navigation/Aside";
import Editor from "./components/editor/Editor";
function App() {
  return (
    <main className=" w-[90%] sm:w-[550px] md:w-[767px] lg:w-[1023px] xl:w-[1400px] mx-auto">
      <Navbar />
      <section className=" flex justify-between">
        <Editor />
        <Aside />
      </section>
    </main>
  );
}

export default App;
