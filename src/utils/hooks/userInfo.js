import { useState, useEffect, createContext, useContext } from "react";
import { account } from "../../appwrite/appwriteConfig";

export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const UserDataProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  useEffect(() => {
    const handleData = async () => {
      const getData = await account.get();
      setuser(getData);
    };
    handleData();
  }, []);

  const value = { user, setuser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserDataProvider;
