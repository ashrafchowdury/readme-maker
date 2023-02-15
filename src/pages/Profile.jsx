import { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import { useUser } from "../utils/hooks/userInfo";
const Profile = () => {
  const { user } = useUser();
  const [name, setname] = useState("");
  return (
    <>
      <Navbar />
      <form className=" w-[600px] mx-auto mt-32">
        <h1 className=" text-3xl font-semibold mb-16">My Profile</h1>

        <label class=" font-medium block mt-7">Your Name</label>
        <input
          type="text"
          name="name"
          placeholder={user.email?.slice(0, user.email?.indexOf("@"))}
          className="w-full px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2 outline-transparent"
          required
          onChange={(e) => setname(e.target.value)}
          value={name}
        />
        <label class=" font-medium block mt-7">Your Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          className="w-full px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2 outline-transparent"
          required
          disabled
          value={user.email}
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
