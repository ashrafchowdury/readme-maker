import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaArrowLeft } from "react-icons/fa";
import Navbar from "../components/navigation/Navbar";
const Signup = () => {
  const handleRedirect = () => {
    window.history.back();
  };
  return (
    <>
      <Navbar />
      <button
        className=" absolute top-32 left-64 py-2 px-2 rounded-full border border-light dark:border-dark"
        onClick={handleRedirect}
      >
        <FaArrowLeft className=" text-xl" />
      </button>

      <section className="flex justify-center space-x-9 mt-[200px]">
        <div className="w-[300px]">
          <h1 className=" text-3xl font-semibold mb-4">
            Log in or create an account
          </h1>
          <p>Quickly get started by signing in using your existing accounts.</p>
        </div>

        <form className=" w-[400px]">
          <p className=" text-lg font-medium mb-6">
            Choose you signing methods
          </p>

          <button className="w-full flex items-center justify-center bg-light dark:bg-dark font-semibold rounded-lg px-4 py-3">
            <FcGoogle className=" text-[25px]" />
            <span className="ml-3">Log in with Google</span>
          </button>
          <button className="w-full flex items-center justify-center bg-light dark:bg-dark font-semibold rounded-lg px-4 py-3 mt-3">
            <FaTwitter className=" text-[25px]" />
            <span className="ml-3">Log in with Twitter</span>
          </button>

          <hr className="my-6 border-light dark:border-dark w-full" />
          <label class=" font-semibold">Enter your email</label>
          <input
            type="email"
            name=""
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2 outline-transparent"
            required
          />
          <p className=" mt-6 mb-3">
            We’ll email you a link for a password-free registration.
          </p>
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold rounded-lg px-4 py-3"
          >
            Log In
          </button>
        </form>
      </section>
    </>
  );
};

export default Signup;
