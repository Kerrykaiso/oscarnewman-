import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import imageBg from "../../assets/contactus.png";

const ContactUs: React.FC = () => {
  return (
    <Element name="contact">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* DARK OVERLAY (Reduced Opacity for Visibility) */}
        <div className="absolute inset-0  bg-opacity-40 flex items-center">
          <div className="container mx-auto px-6 text-white text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-semibold"
            >
              Contact Us
            </motion.h2>
            <p className="mt-4 text-lg">
              We're here to provide security solutions and answer your
              questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h3 className="text-orange-500 font-semibold text-2xl">
            Get in Touch
          </h3>
          <p className="text-gray-700">
            Whether you need security services, consultation, or just have a
            question, we're always here to help.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-800">
              <FaPhoneAlt className="text-orange-500 text-xl" />
              <span className="text-lg">+234 803 347 5167, 090916963126</span>
            </div>
            <div className="flex items-center gap-4 text-gray-800">
              <FaEnvelope className="text-orange-500 text-xl" />
              <span className="text-lg">info@oscarnewmangroup.org</span>
            </div>
            <div className="flex items-start gap-4 text-gray-800">
              <FaMapMarkerAlt className="text-orange-500 text-xl" />
              <span className="text-lg">
                Suite 18 & 19, MIB Plaza 1st Avenue, Gwarimpa Abuja
              </span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-orange-500 font-semibold text-2xl mb-6">
            Send Us a Message
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Type your message..."
                rows={5}
              ></textarea>
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition-all">
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </Element>
  );
};

export default ContactUs;
