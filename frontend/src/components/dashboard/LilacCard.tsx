import { useMemo } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function LilacCard() {

  // Temporary values (Later from Firestore)

  const userName = "Ashmitha";
  const cycleDay = 10;

  const insight = useMemo(() => {

    if (cycleDay <= 5) {
      return {
        title: "🩸 Menstrual Phase",
        message:
          "Your body is resting. Stay hydrated, eat iron-rich foods and don't hesitate to take breaks today.",
      };
    }

    if (cycleDay <= 13) {
      return {
        title: "🌸 Follicular Phase",
        message:
          "Your energy is likely increasing. It's a great time for workouts, studying and creative tasks.",
      };
    }

    if (cycleDay <= 15) {
      return {
        title: "⭐ Ovulation",
        message:
          "You're likely in your fertile window. You may notice higher confidence and energy today.",
      };
    }

    return {
      title: "🌙 Luteal Phase",
      message:
        "Slow down a little. Prioritize sleep, drink enough water and be kind to yourself today.",
    };

  }, [cycleDay]);

  return (

    <div className="mt-6 rounded-3xl bg-gradient-to-r from-[#EADCF1] to-[#F7EEF7] p-6 shadow-lg">

      <div className="flex justify-between items-start">

        <div className="w-full">

          <div className="flex items-center gap-2">

            <Sparkles
              className="text-[#A67FA6]"
              size={24}
            />

            <h2 className="text-xl font-bold text-[#5B4A5B]">
              Lilac AI
            </h2>

          </div>

          <p className="mt-5 text-gray-700 text-lg font-medium">
            Hi {userName}! 🌸
          </p>

          <p className="mt-2 text-[#7D6485] font-semibold">
            {insight.title}
          </p>

          <p className="text-gray-600 mt-3 leading-7">
            {insight.message}
          </p>

          <button
            className="mt-6 w-full bg-[#A67FA6] hover:bg-[#916291] transition text-white py-3 rounded-xl flex items-center justify-center gap-2"
          >

            Ask Lilac

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </div>

  );

}