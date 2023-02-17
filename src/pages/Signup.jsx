import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import Navbar from "../components/navigation/Navbar";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { account } from "../appwrite/appwriteConfig";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "../utils/hooks/userInfo";
import Loading from "../components/utils/Loading";

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { setuser } = useUser();

  const handleSubmit = async () => {
    if (!email || !password) {
      toast.error("Pleace fillup all the fileds");
    } else {
      try {
        setloading(true);
        await account.create(uuidv4(), email, password);
        const data = await account.get();
        setuser(data);
        toast.success("Signup successfully");
        setloading(false);
        navigate("/editor");
      } catch (error) {
        if (
          error.message ==
          "A user with the same email already exists in your project."
        ) {
          setloading(true);
          await account.createEmailSession(email, password);
          const data = await account.get();
          setuser(data);
          toast.success("Login successfully");
          setloading(false);
          navigate("/editor");
        } else {
          console.log(error);
          toast.error("Something was wrong! 🤷‍♀️");
        }
      }
    }
  };
  const handleGoogle = async () => {
    try {
      account.createOAuth2Session("google");
      const data = await account.get();
      setuser(data);
      toast.success("Signup successfully");
      navigate("/editor");
    } catch (error) {
      console.log(error);
      toast.error("Something was wrong! 🤷‍♀️");
    }
  };
  return (
    <>
      <Navbar />

      <section className="flex justify-center space-x-9 mt-[160px]">
        <div className="w-[300px]">
          <h1 className=" text-3xl font-semibold mb-4">
            Log in or create an account
          </h1>
          <p>Quickly get started by signing in using your existing accounts.</p>
        </div>

        <section className=" w-[400px]">
          <p className=" text-lg font-medium mb-6">
            Choose you signing methods
          </p>

          <button
            className="w-full flex items-center justify-center bg-light dark:bg-dark font-semibold rounded-lg px-4 py-3"
            onClick={handleGoogle}
          >
            <FcGoogle className=" text-[25px]" />
            <span className="ml-3">Log in with Google</span>
          </button>
          <button className="w-full flex items-center justify-center bg-light dark:bg-dark font-semibold rounded-lg px-4 py-3 mt-3">
            <FaTwitter className=" text-[25px]" />
            <span className="ml-3">Log in with Twitter</span>
          </button>

          <hr className="my-6 border-light dark:border-dark w-full" />

          <label class=" font-medium">Enter your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2 mb-5 outline-transparent"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />

          <label class=" font-medium">Enter your Paswword</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2 outline-transparent"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
          />

          <button
            className="w-full bg-primary text-white text-center font-semibold rounded-lg px-4 py-3 mt-9"
            onClick={handleSubmit}
            disabled={loading ? true : false}
          >
            {loading ? <Loading load={loading} /> : "Log In"}
          </button>
        </section>
      </section>
    </>
  );
};

export default Signup;
