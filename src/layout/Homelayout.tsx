import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Arrow = () => {
  const [scroll, setScroll] = useState(false);

  const onScroll = () => {
    // Debugging logs to check scroll behavior
    // console.log('ScrollY:', window.scrollY);
    // console.log('InnerHeight:', window.innerHeight);
    // console.log('DocumentHeight:', document.documentElement.scrollHeight);

    // Check if scroll position is past a certain point
    if (window.scrollY >= 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const oNcLIck = () => {
    console.log("hello world");
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fix-arrow fixed bottom-24 z-20 right-16 w-[50px] h-[50px] rounded-lg bg-blue-500 text-white flex justify-center items-center cursor-pointer">
      {!scroll ? (
        <Link to="footer" smooth={true} duration={1000} onClick={oNcLIck}>
          <FaArrowDown />
        </Link>
      ) : (
        <Link to="home" smooth={true} duration={1000} onClick={oNcLIck}>
          <FaArrowUp />
        </Link>
      )}
    </div>
  );
};

const Layout = () => {
  return (
    <>
      <Helmet>
        <title>Home - Oscar Newman Concept</title>
        <meta
          name="description"
          content="Welcome to Oscar Newman Concept, your trusted security provider."
        />
      </Helmet>
      <Arrow />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
