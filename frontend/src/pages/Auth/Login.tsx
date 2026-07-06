import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye } from "lucide-react";
import logo from "../../assets/logo/artava-logo.png";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7EEF7] via-[#E9D5E9] to-[#C8A2C8] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="ARTAVA"
            className="w-32"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mt-5 text-[#7A4E7A]">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Continue your wellness journey
        </p>

        {/* Form */}
        <div className="mt-8 space-y-5">

          {/* Email */}
          <div className="flex items-center border rounded-xl px-4 py-3">
            <Mail size={20} className="text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="ml-3 w-full outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-xl px-4 py-3">
            <Lock size={20} className="text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="ml-3 w-full outline-none"
            />
            <Eye
              size={20}
              className="text-gray-400 cursor-pointer"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-[#8A5CA6] hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Sign In */}
          <button
            type="button"
            onClick={() => navigate("/home")}
            className="w-full bg-[#A67FA6] hover:bg-[#916291] transition text-white py-3 rounded-xl font-semibold"
          >
            Sign In
          </button>

        </div>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 border-t"></div>

          <span className="mx-3 text-gray-400">
            OR
          </span>

          <div className="flex-1 border-t"></div>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="w-full border rounded-xl py-3 font-medium hover:bg-gray-50 transition"
        >
          Continue with Google
        </button>

        {/* Signup */}
        <p className="text-center mt-8 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#8A5CA6] font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}