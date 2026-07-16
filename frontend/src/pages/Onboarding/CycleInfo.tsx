import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CycleInfo() {
  const navigate = useNavigate();

  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState("28");
  const [periodLength, setPeriodLength] = useState("5");

  const handleNext = () => {
    if (!lastPeriod) {
      alert("Please select your last period date.");
      return;
    }

    navigate("/onboarding/goals");
  };

  return (
    <div className="min-h-screen bg-[#FFF8FC] flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-lg">

        <p className="text-sm text-[#A67FA6] font-semibold mb-2">
          Step 2 of 4
        </p>

        <h1 className="text-3xl font-bold text-[#A67FA6] mb-8">
          Cycle Information 🩸
        </h1>

        <label className="block mb-2 font-medium">
          Last Period Start Date
        </label>

        <input
          type="date"
          className="w-full border rounded-xl p-3 mb-6"
          value={lastPeriod}
          onChange={(e) => setLastPeriod(e.target.value)}
        />

        <label className="block mb-2 font-medium">
          Average Cycle Length (days)
        </label>

        <input
          type="number"
          className="w-full border rounded-xl p-3 mb-6"
          value={cycleLength}
          onChange={(e) => setCycleLength(e.target.value)}
        />

        <label className="block mb-2 font-medium">
          Average Period Length (days)
        </label>

        <input
          type="number"
          className="w-full border rounded-xl p-3"
          value={periodLength}
          onChange={(e) => setPeriodLength(e.target.value)}
        />

        <button
          onClick={handleNext}
          className="w-full mt-8 bg-[#A67FA6] text-white py-3 rounded-xl"
        >
          Continue →
        </button>

      </div>
    </div>
  );
}