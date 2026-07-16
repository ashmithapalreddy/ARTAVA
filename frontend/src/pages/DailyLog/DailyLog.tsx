import { useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function DailyLog() {
  const [flow, setFlow] = useState("None");
  const [mood, setMood] = useState("😀 Happy");
  const [water, setWater] = useState(4);
  const [notes, setNotes] = useState("");

  const flows = ["None", "Spotting", "Light", "Medium", "Heavy"];

  const moods = [
    "😀 Happy",
    "😊 Calm",
    "😐 Normal",
    "😔 Sad",
    "😡 Irritated",
    "😴 Tired",
  ];

  const saveLog = async () => {
    try {
      const user = auth.currentUser;

      if (!user) {
        alert("Please login first.");
        return;
      }

      const today = new Date().toISOString().split("T")[0];

      await setDoc(
        doc(db, "users", user.uid, "dailyLogs", today),
        {
          flow,
          mood,
          water,
          notes,
          createdAt: new Date(),
        }
      );

      alert("🌸 Today's log saved successfully!");

    } catch (error: any) {
      console.error("🔥 Firestore Error:", error);

      alert(
        `Error Code: ${error.code}\n\nError Message:\n${error.message}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9FC] p-6 pb-24">

      <h1 className="text-3xl font-bold text-[#5B4A5B]">
        Daily Log
      </h1>

      <p className="text-gray-500 mt-2">
        Record how you're feeling today 🌸
      </p>

      {/* Flow */}

      <div className="mt-8">
        <h2 className="font-semibold text-[#5B4A5B] mb-3">
          Flow
        </h2>

        <div className="flex flex-wrap gap-3">
          {flows.map((item) => (
            <button
              key={item}
              onClick={() => setFlow(item)}
              className={`px-4 py-2 rounded-full border transition ${
                flow === item
                  ? "bg-pink-200 border-pink-300 text-[#5B4A5B]"
                  : "bg-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Mood */}

      <div className="mt-8">
        <h2 className="font-semibold text-[#5B4A5B] mb-3">
          Mood
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {moods.map((item) => (
            <button
              key={item}
              onClick={() => setMood(item)}
              className={`p-3 rounded-2xl border transition ${
                mood === item
                  ? "bg-yellow-100 border-yellow-300"
                  : "bg-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Water */}

      <div className="mt-8">
        <h2 className="font-semibold text-[#5B4A5B] mb-3">
          Water Intake
        </h2>

        <div className="flex items-center gap-5">

          <button
            onClick={() => setWater(Math.max(0, water - 1))}
            className="w-10 h-10 rounded-full bg-[#EADCF1] text-lg"
          >
            −
          </button>

          <span className="text-2xl font-bold text-[#5B4A5B]">
            {water}
          </span>

          <button
            onClick={() => setWater(water + 1)}
            className="w-10 h-10 rounded-full bg-[#A67FA6] text-white text-lg"
          >
            +
          </button>

        </div>
      </div>

      {/* Notes */}

      <div className="mt-8">
        <h2 className="font-semibold text-[#5B4A5B] mb-3">
          Notes
        </h2>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          placeholder="Write something..."
          className="w-full rounded-2xl border p-4 outline-none resize-none"
        />
      </div>

      {/* Save */}

      <button
        onClick={saveLog}
        className="mt-10 w-full bg-[#A67FA6] hover:bg-[#916291] transition text-white py-4 rounded-2xl text-lg font-semibold"
      >
        Save Today's Log
      </button>

    </div>
  );
}