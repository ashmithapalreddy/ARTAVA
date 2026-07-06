import {
  House,
  CalendarDays,
  ChartNoAxesCombined,
  User,
  Plus,
} from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">

      <div className="max-w-md mx-auto flex justify-around items-center py-3 relative">

        <button className="flex flex-col items-center text-[#A67FA6]">
          <House size={24} />
          <span className="text-xs mt-1">Home</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <CalendarDays size={24} />
          <span className="text-xs mt-1">Calendar</span>
        </button>

        {/* Floating Button */}
        <button
          className="
          absolute
          -top-7
          bg-[#A67FA6]
          w-16
          h-16
          rounded-full
          shadow-xl
          flex
          items-center
          justify-center
          text-white
          hover:scale-105
          transition"
        >
          <Plus size={30} />
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <ChartNoAxesCombined size={24} />
          <span className="text-xs mt-1">Insights</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </button>

      </div>

    </div>
  );
}