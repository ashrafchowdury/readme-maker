import { BiLoaderCircle } from "react-icons/bi";

const Loading = ({ load, style = "text-lg" }) => {
  if (load) {
    return <BiLoaderCircle className={`${style} animate-spin mx-auto`} />;
  }
};

export default Loading;
