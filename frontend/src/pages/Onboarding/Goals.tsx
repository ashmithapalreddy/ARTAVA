import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Goals() {
  const navigate = useNavigate();

  const [goals, setGoals] = useState<string[]>([]);

  const options = [
    "Track my cycle",
    "Get pregnancy insights",
    "Improve hormonal health",
    "Understand my body",
    "Get AI guidance",
  ];

  const toggleGoal = (goal: string) => {
    if (goals.includes(goal)) {
      setGoals(goals.filter((g) => g !== goal));
    } else {
      setGoals([...goals, goal]);
    }
  };

  const handleFinish = () => {
    if (goals.length === 0) {
      alert("Please select at least one goal.");
      return;
    }

    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#FFF8FC] flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-lg">

        <p className="text-sm text-[#A67FA6] font-semibold mb-2">
          Step 3 of 4
        </p>

        <h1 className="text-3xl font-bold text-[#A67FA6] mb-8">
          What are your goals? 🌸
        </h1>

        <div className="space-y-4">
          {options.map((goal) => (
            <button
              key={goal}
              onClick={() => toggleGoal(goal)}
              className={`w-full p-4 rounded-xl border transition ${
                goals.includes(goal)
                  ? "bg-[#A67FA6] text-white border-[#A67FA6]"
                  : "bg-white border-gray-300"
              }`}
            >
              {goal}
            </button>
          ))}
        </div>

        <button
          onClick={handleFinish}
          className="w-full mt-8 bg-[#A67FA6] text-white py-3 rounded-xl"
        >
          Finish →
        </button>

      </div>
    </div>
  );
}