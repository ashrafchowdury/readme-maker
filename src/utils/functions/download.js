import { toast } from "react-hot-toast";

//function for download the file
export const downloadFile = (schema) => {
  try {
    const a = document.createElement("a");
    const blob = new Blob([schema]);
    a.href = URL.createObjectURL(blob);
    a.download = "Readme.md";
    a.click();
    toast.success("Download File Successfully 😘");
  } catch (error) {
    toast.error("Something was wrong!");
  }
};
