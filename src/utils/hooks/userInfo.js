import { useState, useEffect, createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import { account } from "../../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const UserDataProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleData = async () => {
      const getData = await account.get();
      setuser(getData);
    };
    handleData();
  }, []);

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setuser(null);
      toast.success("Logout successfully 🤝");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something was wrong!");
    }
  };

  const value = { user, setuser, logout };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserDataProvider;
