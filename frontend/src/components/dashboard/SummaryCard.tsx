import { useEffect, useState } from "react";
import { Droplets, Heart, Smile } from "lucide-react";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function SummaryCard() {

  const [flow, setFlow] = useState("None");
  const [mood, setMood] = useState("Happy");
  const [water, setWater] = useState(0);

  useEffect(() => {

    const loadTodayLog = async () => {

      try {

        const user = auth.currentUser;

        if (!user) return;

        const today = new Date().toISOString().split("T")[0];

        const docRef = doc(
          db,
          "users",
          user.uid,
          "dailyLogs",
          today
        );

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

          const data = docSnap.data();

          setFlow(data.flow || "None");
          setMood(data.mood || "Happy");
          setWater(data.water || 0);

        }

      } catch (error) {

        console.error("Couldn't load today's log", error);

      }

    };

    loadTodayLog();

  }, []);

  return (

    <div className="mt-6 bg-white rounded-3xl shadow-md p-6">

      <h2 className="text-xl font-bold text-[#5B4A5B] mb-5">
        Today's Summary
      </h2>

      <div className="grid grid-cols-3 gap-4">

        {/* Flow */}

        <div className="bg-[#FFF3F7] rounded-2xl p-4 text-center transition hover:scale-105 duration-300">

          <Droplets
            className="mx-auto text-pink-500"
            size={28}
          />

          <p className="mt-2 text-sm text-gray-500">
            Flow
          </p>

          <p className="font-semibold mt-1 text-[#5B4A5B]">
            {flow}
          </p>

        </div>

        {/* Mood */}

        <div className="bg-[#FFF8E8] rounded-2xl p-4 text-center transition hover:scale-105 duration-300">

          <Smile
            className="mx-auto text-yellow-500"
            size={28}
          />

          <p className="mt-2 text-sm text-gray-500">
            Mood
          </p>

          <p className="font-semibold mt-1 text-[#5B4A5B]">
            {mood}
          </p>

        </div>

        {/* Water */}

        <div className="bg-[#EEF8FF] rounded-2xl p-4 text-center transition hover:scale-105 duration-300">

          <Heart
            className="mx-auto text-sky-500"
            size={28}
          />

          <p className="mt-2 text-sm text-gray-500">
            Water
          </p>

          <p className="font-semibold mt-1 text-[#5B4A5B]">
            {water} / 8
          </p>

        </div>

      </div>

    </div>

  );
}