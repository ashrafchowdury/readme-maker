import { useState } from "react";
import { toast } from "react-hot-toast";
import { account } from "../appwrite/appwriteConfig";
import Navbar from "../components/navigation/Navbar";
import { useUser } from "../utils/hooks/userInfo";
const Profile = () => {
  const { user, setuser, logout } = useUser();
  const [name, setname] = useState("");
  const handleChange = async () => {
    if (!name) {
      toast.error("Pleace Fillup all the fileds");
    } else {
      try {
        await account.updateName(name);
        const data = await account.get();
        toast.success("Name updated sucssessfully");
        setuser(data);
        setname("");
      } catch (error) {
        toast.success("Something was wrong!");
        console.log(error);
      }
    }
  };
  return (
    <>
      <Navbar />
      <section className=" w-[600px] mx-auto mt-32">
        <h1 className=" text-3xl font-semibold mb-16">My Profile</h1>

        <label class=" font-medium block mt-7">Name</label>
        <input
          type="text"
          name="name"
          placeholder={user?.name}
          className="w-full px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2 outline-transparent"
          onChange={(e) => setname(e.target.value)}
          value={name}
        />
        <p class=" font-medium block mt-7">Email</p>
        <p className="w-full px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2">
          {user?.email}
        </p>
        <p class=" font-medium block mt-7">User ID</p>
        <p className="w-full px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2">
          {user?.$id}
        </p>

        <button
          type="submit"
          className={`w-full bg-primary text-white font-semibold rounded-lg px-4 py-3 mt-12 ${
            !name && "opacity-50"
          }`}
          disabled={name ? false : true}
          onClick={handleChange}
        >
          Save Changes
        </button>
        <hr className="my-6 border-light dark:border-dark w-full" />
        <button
          type="submit"
          className="w-full bg-red-500 text-white font-semibold rounded-lg px-4 py-3"
          onClick={() => logout()}
        >
          Log Out
        </button>
      </section>
    </>
  );
};

export default Profile;
