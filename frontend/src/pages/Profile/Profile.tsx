import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";

export default function Profile() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {

    const user = auth.currentUser;

    if (user) {
      setName(user.displayName || "ARTAVA User");
      setEmail(user.email || "");
    }

  }, []);

  return (

    <div className="min-h-screen bg-[#FFF9FC] p-6">

      <h1 className="text-3xl font-bold text-[#5B4A5B]">
        Profile
      </h1>

      <div className="mt-8 bg-white rounded-3xl shadow-md p-6">

        <div className="w-24 h-24 rounded-full bg-[#EADCF1] flex items-center justify-center text-5xl mx-auto">
          👤
        </div>

        <h2 className="mt-6 text-center text-2xl font-bold text-[#5B4A5B]">
          {name}
        </h2>

        <p className="text-center text-gray-500">
          {email}
        </p>

      </div>

    </div>

  );

}