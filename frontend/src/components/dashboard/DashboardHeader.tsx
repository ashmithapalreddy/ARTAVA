import { auth } from "../../firebase/firebase";
import { useEffect, useState } from "react";

export default function DashboardHeader() {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      if (user.displayName) {
        setUserName(user.displayName);
      } else if (user.email) {
        // If signed up using email/password
        const name = user.email.split("@")[0];
        setUserName(
          name.charAt(0).toUpperCase() + name.slice(1)
        );
      }
    }
  }, []);

  const hour = new Date().getHours();

  let greeting = "Good Morning 🌸";

  if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon ☀️";
  } else if (hour >= 17 && hour < 22) {
    greeting = "Good Evening 🌷";
  } else if (hour >= 22 || hour < 5) {
    greeting = "Good Night 🌙";
  }

  return (
    <div className="flex items-center justify-between">

      <div>

        <p className="text-gray-500 text-sm">
          {greeting}
        </p>

        <h1 className="text-3xl font-bold text-[#5B4A5B]">
          {userName}
        </h1>

      </div>

      <div className="w-14 h-14 rounded-full bg-[#EADCF1] flex items-center justify-center text-2xl shadow-md">

        👤

      </div>

    </div>
  );
}
