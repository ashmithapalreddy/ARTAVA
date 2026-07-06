import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E8D6E8]">

      <div className="bg-white p-8 rounded-3xl shadow-xl">

        <h1 className="text-3xl font-bold">
          Sign Up
        </h1>

        <p className="mt-3">
          Signup page coming soon...
        </p>

        <Link
          to="/login"
          className="text-purple-600 mt-6 block"
        >
          Back to Login
        </Link>

      </div>

    </div>
  );
}
