import React, { useState } from "react";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import toast from "react-hot-toast";
import axios from "../../config/axiosConfig";

const CreateAdmin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/registerAdmin", formData);
      toast.success("Register Successfully");
      console.log(response.data.data);
      toast.success("Admin created successfully!");
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      toast.error("Failed to create admin. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen overflow-y-scroll flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-100">Create Admin</h2>
          <p className="mt-2 text-gray-400">
            Add a new administrator to the system
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Name Input */}
          <div className="relative">
            <label
              htmlFor="name"
              className="text-gray-300 text-sm font-medium mb-1 block"
            >
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-700 text-gray-100 pl-10 pr-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                placeholder="Enter full name"
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <label
              htmlFor="email"
              className="text-gray-300 text-sm font-medium mb-1 block"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-700 text-gray-100 pl-10 pr-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                placeholder="Enter email address"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <label
              htmlFor="password"
              className="text-gray-300 text-sm font-medium mb-1 block"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-700 text-gray-100 pl-10 pr-12 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-teal-500 to-teal-400 text-gray-900 py-3 rounded-lg font-semibold hover:from-teal-400 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center justify-center"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Create Admin"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAdmin;
