import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

export default function CycleCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="mt-6 bg-white rounded-3xl shadow-md p-6">

      <h3 className="text-xl font-semibold text-[#5B4A5B]">
        Calendar
      </h3>

      <div className="mt-4 rounded-2xl overflow-hidden">

        <Calendar
          value={date}
          onChange={(value) => setDate(value as Date)}
        />

      </div>

    </div>
  );
}