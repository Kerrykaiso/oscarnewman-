import { RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { router } from "./Routes/routes";
import { useEffect, useState } from "react";
import logo from "../src/assets/newlogorem.png";

import { motion } from "framer-motion";

const LoadingScreen = () => (
  <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#09032e] to-blue-800">
    <div className="relative flex items-center justify-center">
      {/* Outer pulsing ring effect */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full opacity-10 w-[50%] h-[50%] flex justify-center items-center "
      />

      {/* Logo with appearing and disappearing effect */}
      <motion.img
        src={logo}
        alt="Logo"
        className=" w-[20rem] h-[80%] object-contain"
        animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    <div className="mt-8 text-center">
      <h1 className="text-white text-2xl font-bold mb-2">
        Oscar Newman Concept Limited
      </h1>
      <div className="text-blue-200 text-sm">
        Initializing Secure Environment
      </div>

      {/* Loading dots with bounce effect */}
      <div className="flex justify-center mt-4 space-x-1">
        {[0, 0.2, 0.4].map((delay, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-white rounded-full"
            animate={{ y: [-5, 5, -5] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Add initialization logic here
        await new Promise((resolve) => setTimeout(resolve, 5000));
      } catch (error) {
        console.error("Initialization error:", error);
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Helmet>
        <title>Oscar Newman Concept Limited</title>
        <meta
          name="description"
          content="Providing top-notch security solutions for your needs."
        />
        <meta
          name="keywords"
          content="Security, Safety, Protection, Oscar Newman Concept"
        />
        <meta name="author" content="Oscar Newman Concept Limited" />
        <meta property="og:title" content="Oscar Newman Concept Limited" />
        <meta
          property="og:description"
          content="Providing top-notch security solutions for your needs."
        />
        <meta property="og:image" content="./assets/logo.svg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
