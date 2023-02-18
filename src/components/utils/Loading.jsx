import { BiLoaderCircle } from "react-icons/bi";

const Loading = ({ load, style = "text-2xl" }) => {
  if (load) {
    return <BiLoaderCircle className={`${style} animate-spin mx-auto`} />;
  }
};

export default Loading;
