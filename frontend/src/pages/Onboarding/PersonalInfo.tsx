import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PersonalInfo() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleNext = () => {
    if (!name || !age || !height || !weight) {
      alert("Please fill all fields.");
      return;
    }

    navigate("/onboarding/cycle");
  };

  return (
    <div className="min-h-screen bg-[#FFF8FC] flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-lg">

        <p className="text-sm text-[#A67FA6] font-semibold mb-2">
          Step 1 of 4
        </p>

        <h1 className="text-3xl font-bold text-[#A67FA6] mb-8">
          Tell us about yourself 🌸
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-xl p-3 mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          className="w-full border rounded-xl p-3 mb-4"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="number"
          placeholder="Height (cm)"
          className="w-full border rounded-xl p-3 mb-4"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          className="w-full border rounded-xl p-6"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
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