import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login, loginWithGoogle } from "../../services/auth";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await login(email, password);

      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF9FC] px-6">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md"
      >

        <h1 className="text-3xl font-bold text-center text-[#A67FA6] mb-8">
          Welcome Back
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
          {loading ? "Signing In..." : "Login"}
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full mt-4 border border-gray-300 py-3 rounded-xl hover:bg-gray-100"
        >
          Continue with Google
        </button>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#A67FA6] font-semibold"
          >
            Sign Up
          </Link>
        </p>

      </form>

    </div>
  );
}