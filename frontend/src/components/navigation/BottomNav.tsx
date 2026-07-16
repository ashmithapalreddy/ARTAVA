import {
  House,
  CalendarDays,
  ChartNoAxesCombined,
  User,
  Plus,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">

      <div className="max-w-md mx-auto flex justify-around items-center py-3 relative">

        {/* Home */}

        <button
          onClick={() => navigate("/home")}
          className={`flex flex-col items-center ${
            location.pathname === "/home"
              ? "text-[#A67FA6]"
              : "text-gray-500"
          }`}
        >
          <House size={24} />
          <span className="text-xs mt-1">Home</span>
        </button>

        {/* Calendar */}

        <button
          onClick={() => alert("Calendar page coming soon 🌸")}
          className="flex flex-col items-center text-gray-500"
        >
          <CalendarDays size={24} />
          <span className="text-xs mt-1">Calendar</span>
        </button>

        {/* Floating + Button */}

        <button
          onClick={() => navigate("/daily-log")}
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
            transition
          "
        >
          <Plus size={30} />
        </button>

        {/* Insights */}

        <button
          onClick={() => alert("Insights page coming soon 🌸")}
          className="flex flex-col items-center text-gray-500"
        >
          <ChartNoAxesCombined size={24} />
          <span className="text-xs mt-1">Insights</span>
        </button>

        {/* Profile */}

        <button
          onClick={() => navigate("/profile")}
          className={`flex flex-col items-center ${
            location.pathname === "/profile"
              ? "text-[#A67FA6]"
              : "text-gray-500"
          }`}
        >
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </button>

      </div>

    </div>
  );
}