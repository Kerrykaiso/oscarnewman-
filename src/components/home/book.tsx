import { useState } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUserShield,
} from "react-icons/fa";
import { MdEmail, MdSecurity } from "react-icons/md";

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "general",
    date: "",
    message: "",
  });

  const services = [
    { value: "general", label: "General Security Consultation" },
    { value: "cyber", label: "Cybersecurity Assessment" },
    { value: "executive", label: "Executive Protection" },
    { value: "residential", label: "Residential Security" },
    { value: "corporate", label: "Corporate Security" },
    { value: "event", label: "Event Security" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your consultation request. We will contact you shortly."
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20 bg-blue-50 rounded-xl p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Secure Your Future
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Schedule a confidential consultation with our security experts to
          assess your unique protection needs.
        </p>
      </section>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Consultation Form */}
        <section className="lg:w-2/3">
          <h2 className="text-3xl font-bold mb-8">Request Consultation</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-gray-700 mb-2">
                Service Interest*
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={formData.service}
                onChange={handleChange}
              >
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-gray-700 mb-2">
                Preferred Date*
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Specific Concerns or Requirements
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition"
            >
              Request Confidential Consultation
            </button>
          </form>
        </section>

        {/* Contact Info */}
        <section className="lg:w-1/3">
          <div className="bg-gray-50 rounded-xl p-8 sticky top-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <FaPhoneAlt className="text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium">Hotline</h4>
                  <p className="text-gray-600">+234 803 347 5167</p>
                  <p className="text-sm text-gray-500">
                    24/7 immediate response
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MdEmail className="text-blue-600 mt-1 mr-4 text-xl" />
                <div>
                  <h4 className="font-medium">General Inquiries</h4>
                  <p className="text-gray-600">info@oscarnewmangroup.org</p>
                  <p className="text-sm text-gray-500">
                    Response within 2 business hours
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium">Headquarters</h4>
                  <p className="text-gray-600">
                    Suite 18 & 19, MIB Plaza 1st Avenue,
                  </p>
                  <p className="text-gray-600">Gwarimpa Abuja</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaClock className="text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium">Consultation Hours</h4>
                  <p className="text-gray-600">Monday-Friday: 8am-8pm WAT</p>
                  <p className="text-gray-600">Saturday: 10am-4pm WAT</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-4">What to Expect:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MdSecurity className="text-blue-600 mt-1 mr-2" />
                  <span className="text-gray-700">
                    1-hour confidential discussion
                  </span>
                </li>
                <li className="flex items-start">
                  <FaUserShield className="text-blue-600 mt-1 mr-2" />
                  <span className="text-gray-700">
                    No-obligation assessment
                  </span>
                </li>
                <li className="flex items-start">
                  <FaUserShield className="text-blue-600 mt-1 mr-2" />
                  <span className="text-gray-700">
                    Customized security proposal
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BookConsultation;
