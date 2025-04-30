import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "../assets/herosect.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const nav = useNavigate();

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const slides = [
    {
      title: (
        <>
          Your{" "}
          <span className="text-[#fd7904] drop-shadow-lg">
            No.1 <br /> Security
          </span>{" "}
          Risk Advisory & <br /> Management Company
        </>
      ),
      description:
        "With over 25 years of experience, we've seen it all. That's why Oscar Newman Concept Limited is the trusted security partner for businesses and individuals across Nigeria. Discover our cutting-edge security solutions, services, and strategies.",
    },
    {
      title: (
        <>
          Advanced{" "}
          <span className="text-[#fd7904] drop-shadow-lg">
            Security <br /> Solutions
          </span>{" "}
          for Modern <br /> Challenges
        </>
      ),
      description:
        "Leveraging cutting-edge technology and expert personnel, we provide comprehensive security solutions tailored to your specific needs. Our innovative approach ensures maximum protection for your assets.",
    },
    {
      title: (
        <>
          Professional{" "}
          <span className="text-[#fd7904] drop-shadow-lg">
            Team of <br /> Experts
          </span>{" "}
          at Your <br /> Service
        </>
      ),
      description:
        "Our highly trained security professionals bring decades of combined experience to every project. Trust our team to deliver excellence in risk management and security consulting.",
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIsAutoPlaying(false);
    setCurrentSlide(
      (prev) => (prev + newDirection + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (!isAutoPlaying) {
      const timeout = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [isAutoPlaying]);

  return (
    <div
      className="w-full min-h-screen relative px-10 lg:px-28 py-16 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="flex flex-col items-center w-full max-w-4xl mx-auto relative z-10">
            <div className="w-full text-center">
              <motion.h1
                className="lg:text-5xl text-3xl font-extrabold tracking-wide leading-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  className="px-6 py-2 text-lg font-semibold border-2 border-[#fd7904] text-[#fd7904] rounded-lg hover:bg-[#fd7904] hover:text-white transition-all duration-300"
                  onClick={() => {
                    nav("aboutus");
                  }}
                >
                  Learn More
                </button>
                <button
                  className="px-6 py-2 text-lg font-semibold bg-[#fd7904] text-white rounded-lg hover:bg-[#e56c00] transition-all duration-300"
                  onClick={() => {
                    console.log("navigating to contact page");
                    nav("book");
                  }}
                >
                  Book a Consultation
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[#fd7904]/20 hover:bg-[#fd7904]/40 transition-colors duration-300 z-20"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[#fd7904]/20 hover:bg-[#fd7904]/40 transition-colors duration-300 z-20"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`h-1 transition-all duration-300 rounded-full ${
              currentSlide === index ? "w-8 bg-[#fd7904]" : "w-4 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
