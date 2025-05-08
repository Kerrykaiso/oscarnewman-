import { useEffect } from "react";
import Hero from "../Hero";
import About from "./About";
import Consult from "./Consult";
import Services from "./Services";
import Testimonials from "./Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import Partners from "../Partners";
import SecurityPartners from "../SecurityPartners";
import Blog from "./Blog";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <Hero />
      <Services />
      <About />
      <Consult />
      <Testimonials />
      <Blog />
      <SecurityPartners />
      <Partners />
    </div>
  );
};

export default Home;
