import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../../services/auth";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await signup(email, password);

      alert("Account created successfully!");

      navigate("/onboarding");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF9FC] px-6">

      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md"
      >

        <h1 className="text-3xl font-bold text-center text-[#A67FA6] mb-8">
          Create Account
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-xl p-3 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-xl p-3 mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#A67FA6] text-white py-3 rounded-xl hover:bg-[#916291]"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#A67FA6] font-semibold"
          >
            Login
          </Link>
        </p>

      </form>

    </div>
  );
}