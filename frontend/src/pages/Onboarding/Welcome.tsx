import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFF8FC] flex items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-lg w-full text-center">

        <h1 className="text-4xl font-bold text-[#A67FA6] mb-6">
          Welcome to ARTAVA 🌸
        </h1>

        <p className="text-gray-600 mb-10 leading-7">
          Let's personalize your experience so we can give you accurate
          cycle predictions, insights, reminders and AI guidance.
        </p>

        <button
          onClick={() => navigate("/onboarding/personal")}
          className="w-full bg-[#A67FA6] text-white py-4 rounded-xl hover:bg-[#8f6590]"
        >
          Get Started →
        </button>

      </div>
    </div>
  );
}