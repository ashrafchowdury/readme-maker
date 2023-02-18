import { useState } from "react";
import { FaGithub } from "react-icons/fa";
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
  const [forget, setforget] = useState(false);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { setuser } = useUser();

  const handleSubmit = async () => {
    if (!email || !password) {
      toast.error("Pleace fillup all the fileds");
    } else {
      try {
        setloading(true);
        await account.create(
          uuidv4(),
          email,
          password,
          email?.slice(0, email?.indexOf("@"))
        );
        const data = await account.get();
        setuser(data);
        toast.success("Signup successfully");
        setloading(false);
        navigate("/editor");
      } catch (error) {
        const { message } = error;
        if (
          message ==
          "A user with the same email already exists in your project."
        ) {
          try {
            setloading(true);
            await account.createEmailSession(email, password);
            const data = await account.get();
            setuser(data);
            toast.success("Login successfully");
            setloading(false);
            navigate("/editor");
          } catch (error) {
            setloading(false);
            if (
              error.message ==
              "Invalid credentials. Please check the email and password."
            ) {
              toast.error("Password not match");
            }
          }
        } else if (
          message == "Invalid password: Password must be at least 8 characters"
        ) {
          setloading(false);
          toast.error("Password must be at least 8 characters");
        } else {
          setloading(false);
          console.log(error);
          toast.error("Something was wrong! 🤷‍♀️");
        }
      }
    }
  };

  const handleGoogle = async () => {
    try {
      setloading(true);
      account.createOAuth2Session("github");
      const data = await account.get();
      console.log(data);
      setuser(data);
      toast.success("Signup successfully");
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
      toast.error("Something was wrong! 🤷‍♀️");
    }
  };

  const handleRecovary = async () => {
    if (!email) {
      toast.error("Pleace fillup all the fileds");
    } else {
      try {
        const data = await account.createRecovery(
          email,
          "http://localhost:3000/signup"
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
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
            disabled={loading ? true : false}
          >
            {loading ? (
              <Loading load={loading} />
            ) : (
              <>
                <FaGithub className=" text-[25px]" />
                <span className="ml-3">Log in with Github</span>
              </>
            )}
          </button>

          <hr className="my-6 border-light dark:border-dark w-full" />

          {forget && (
            <p className=" text-center my-6 text-xl font-semibold">
              Add Previous Email & New Password
            </p>
          )}
          <label class=" font-medium">Enter your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2 mb-5 outline-transparent"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />

          <label class=" font-medium">Paswword add minimum 8 characters</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-3 rounded-lg bg-light dark:bg-dark mt-2 outline-transparent"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
          />

          <button
            className="w-full block text-sm text-right mt-3 "
            onClick={() => (forget ? setforget(false) : setforget(true))}
          >
            {forget ? "Login" : "Forget Password!"}
          </button>

          {forget ? (
            <button
              className="w-full bg-primary text-white text-center font-semibold rounded-lg px-4 py-3 mt-9"
              disabled={loading ? true : false}
              onClick={handleRecovary}
            >
              {loading ? <Loading load={loading} /> : "Reset Password"}
            </button>
          ) : (
            <button
              className="w-full bg-primary text-white text-center font-semibold rounded-lg px-4 py-3 mt-9"
              onClick={handleSubmit}
              disabled={loading ? true : false}
            >
              {loading ? <Loading load={loading} /> : "Log In"}
            </button>
          )}
        </section>
      </section>
    </>
  );
};

export default Signup;
