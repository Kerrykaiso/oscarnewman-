import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axiosConfig";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    const toastloadingId = toast.loading("please wait...");

    const data = {
      email,
      password,
    };
    e.preventDefault();
    try {
      const response = await axios.post("/loginAdmin", data);
      toast.success("login Successfully...");
      localStorage.setItem("adminToken", response.data.jwt);
      navigate("/dash/allpost");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastloadingId);
    }

    // Add authentication logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0a0f2d]">
      <div className="bg-white p-6 rounded-lg shadow-md w-[350px]">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border rounded-md"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 border rounded-md"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Sign-up Link */}
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/reg")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
