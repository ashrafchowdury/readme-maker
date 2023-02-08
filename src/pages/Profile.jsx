import React from "react";
import Navbar from "../components/navigation/Navbar";
const Profile = () => {
  return (
    <>
      <Navbar />
      <form className=" w-[600px] mx-auto mt-32">
        <h1 className=" text-3xl font-semibold mb-16">My Profile</h1>

        <label class=" font-medium block mt-7">First Name</label>
        <input
          type="text"
          name=""
          placeholder="Enter First Name"
          className="w-full px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2 outline-transparent"
          required
        />
        <label class=" font-medium block mt-7">Last Name</label>
        <input
          type="text"
          name=""
          placeholder="Enter Last Name"
          className="w-full px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2 outline-transparent"
          required
        />
        <label class=" font-medium block mt-7">Your Email</label>
        <input
          type="email"
          name=""
          placeholder="Enter Email Address"
          className="w-full px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2 outline-transparent"
          required
        />

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold rounded-lg px-4 py-3 mt-12"
        >
          Save Changes
        </button>
      </form>
    </>
  );
};

export default Profile;
