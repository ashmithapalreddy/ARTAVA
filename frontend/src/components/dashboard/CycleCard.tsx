import { useEffect, useMemo, useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function CycleCard() {

  const [cycleLength, setCycleLength] = useState(28);
  const [lastPeriodDate, setLastPeriodDate] = useState(
    new Date("2026-07-01")
  );

  useEffect(() => {

    const loadCycleData = async () => {

      try {

        const user = auth.currentUser;

        if (!user) return;

        const docRef = doc(db, "users", user.uid, "cycle", "current");

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

          const data = docSnap.data();

          if (data.cycleLength)
            setCycleLength(data.cycleLength);

          if (data.lastPeriod)
            setLastPeriodDate(new Date(data.lastPeriod));

        }

      } catch (error) {

        console.error("Couldn't load cycle data", error);

      }

    };

    loadCycleData();

  }, []);

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const period = new Date(lastPeriodDate);

  period.setHours(0, 0, 0, 0);

  const differenceInDays = Math.floor(

    (today.getTime() - period.getTime()) /

      (1000 * 60 * 60 * 24)

  );

  const cycleDay =
    ((differenceInDays % cycleLength) + cycleLength) %
      cycleLength +
    1;

  const phase = useMemo(() => {

    if (cycleDay <= 5)
      return "🩸 Menstrual Phase";

    if (cycleDay <= 13)
      return "🌸 Follicular Phase";

    if (cycleDay <= 15)
      return "⭐ Ovulation";

    return "🌙 Luteal Phase";

  }, [cycleDay]);

  const progress = (cycleDay / cycleLength) * 100;

  return (

    <div className="mt-6 rounded-3xl bg-gradient-to-r from-[#D8B4D8] to-[#C8A2C8] p-6 shadow-lg text-white">

      <p className="text-sm opacity-90">
        Current Cycle
      </p>

      <h2 className="text-5xl font-bold mt-2">
        Day {cycleDay}
      </h2>

      <p className="mt-3 text-lg">
        {phase}
      </p>

      <div className="mt-5 h-2 rounded-full bg-white/30 overflow-hidden">

        <div
          className="h-full rounded-full bg-white transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>

  );

}