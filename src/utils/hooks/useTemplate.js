import { useState, useEffect } from "react";
import { database } from "../../appwrite/appwriteConfig";
import { Query } from "appwrite";
import { toast } from "react-hot-toast";

export const useTemplate = (user) => {
  const [templates, settemplates] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const handleGetTemplate = async () => {
      try {
        setloading(true);
        const query = [Query.equal("user", user?.$id)];
        const getData = await database.listDocuments(
          "63eb228016758764c7f1",
          "63eb2297eb0ff8f8cc79",
        );
        settemplates(getData.documents);
        setloading(false);
      } catch (error) {
        toast.error("Failed to fetch templates");
        console.log(error);
      }
    };

    handleGetTemplate();
  }, []);

  const deleteTemplate = async (docId) => {
    try {
      await database.deleteDocument(
        "63eb228016758764c7f1",
        "63eb2297eb0ff8f8cc79",
        docId
      );
      toast.success("Template deleted successfully");
    } catch (error) {
      toast.error("Something was wrong!");
      console.log(error);
    }
  };
  return { templates, loading, deleteTemplate };
};
