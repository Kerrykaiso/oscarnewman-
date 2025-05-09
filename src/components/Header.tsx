import { Link } from "react-router-dom";
import logo from "../assets/newlogorem.png";
// import logo2 from "../assets/logo22.png"
//mport logo2 from "../assets/logo22.png"
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="bg-[#09032e] z-50 py-2 lg:px-18 px-2 flex justify-between items-center w-full h-[13vh] max-md:h-[10vh] fixed top-0 left-0"
      id="home"
    >
      <Link
        to="/"
        className="flex justify-center items-center w-[10%] h-full max-md:w-[40%]"
      >
        <img src={logo} alt="logo" width={125} />
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
