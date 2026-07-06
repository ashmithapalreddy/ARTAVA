import { Link } from "react-router-dom";
import logo from "../../assets/logo/artava-logo.png";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8D6E8] to-[#C8A2C8] flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">

        <div className="flex justify-center">
          <img
            src={logo}
            alt="ARTAVA"
            className="w-36"
          />
        </div>

        <h1 className="text-3xl font-bold text-center mt-6 text-[#7A5C87]">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Sign in to continue your wellness journey
        </p>

        <form className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#B28AC5]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#B28AC5]"
          />

          <button
            className="w-full bg-[#A67FA6] hover:bg-[#936693] text-white py-3 rounded-xl font-semibold transition"
          >
            Sign In
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#8A5CA6] font-semibold"
          >
            Create Account
          </Link>
        </p>

      </div>

    </div>
  );
}