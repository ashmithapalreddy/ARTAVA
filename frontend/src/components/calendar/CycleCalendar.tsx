import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CycleCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="bg-white rounded-3xl shadow-md p-5">
      <h2 className="text-xl font-bold text-[#5B4A5B] mb-4">
        Cycle Calendar
      </h2>

      <Calendar
        value={value}
        onChange={(date) => setValue(date as Date)}
      />
    </div>
  );
}