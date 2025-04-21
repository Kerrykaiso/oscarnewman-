import { Link } from "react-router-dom";
import logo from "../assets/newlogorem.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="bg-[#09032e] -mb-1 py-2 lg:px-18 px-2 flex justify-between items-center w-full h-[13vh] max-md:h-[10vh]"
      id="home"
    >
      <Link
        to="/"
        className="flex justify-center items-center w-[10%] h-full max-md:w-[40%] max-md:h-[100%]"
      >
        <img src={logo} alt="logo" width={90} />
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
