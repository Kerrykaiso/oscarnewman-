import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import imageBg from "../../assets/contactus.png";
import  { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const ContactUs: React.FC = () => {


  interface FormData {
    user_name: string;
    user_email: string;
    message: string;
    }
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    message: "",
  });
  


    const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      };


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      alert("Please fill in all fields.");
      return;
      
    }
    const templateParams = {
      from_name: formData.user_name,
      from_email: formData.user_email,
      to_name: "Oscar Newman Group",
      message: formData.message,
      };

      emailjs
        .send("service_2j8xq4g", "template_3v5z6gk", templateParams, "user_0X1Y2Z3A4B5C6D7E8F9G0")
        .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" });
          },(error) => {
            console.error(error.text);
            alert("Failed to send message.");
            })
  }
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
            <div className="flex items-center gap-4 text-gray-800">
              <FaEnvelope className="text-orange-500 text-xl" />
              <span className="text-lg">oscarnewmangroup@gmail.com</span>
  
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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                value={formData.user_name}
                onChange={handleChange}
                name="user_name"
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
                value={formData.user_email}
                onChange={handleChange}
                name="user_email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                value={formData.message}
                onChange={handleChange}
                name="message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="How can we help you"
                rows={5}
              ></textarea>
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition-all" type="submit">
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </Element>
  );
};

export default ContactUs;
