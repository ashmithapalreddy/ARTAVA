import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import logo from "../../assets/logo/artava-logo.png";

export default function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7EEF7] via-[#E9D5E9] to-[#C8A2C8] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        <div className="flex justify-center">
          <img
            src={logo}
            alt="ARTAVA"
            className="w-32"
          />
        </div>

        <h1 className="text-3xl font-bold text-center mt-5 text-[#7A4E7A]">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Start your wellness journey with ARTAVA
        </p>

        <div className="mt-8 space-y-5">

          <div className="flex items-center border rounded-xl px-4 py-3">
            <User size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="ml-3 w-full outline-none"
            />
          </div>

          <div className="flex items-center border rounded-xl px-4 py-3">
            <Mail size={20} className="text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="ml-3 w-full outline-none"
            />
          </div>

          <div className="flex items-center border rounded-xl px-4 py-3">
            <Lock size={20} className="text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="ml-3 w-full outline-none"
            />
          </div>

          <button
            className="w-full bg-[#A67FA6] hover:bg-[#916291] transition text-white py-3 rounded-xl font-semibold"
          >
            Create Account
          </button>

        </div>

        <p className="text-center mt-8 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#8A5CA6] font-semibold"
          >
            Sign In
          </Link>
        </p>

      </div>

    </div>
  );
}
