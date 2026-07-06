import { Droplets, Heart, Smile } from "lucide-react";

export default function SummaryCard() {
  return (
    <div className="mt-6 bg-white rounded-3xl shadow-md p-6">

      <h2 className="text-xl font-bold text-[#5B4A5B] mb-5">
        Today's Summary
      </h2>

      <div className="grid grid-cols-3 gap-4">

        {/* Flow */}
        <div className="bg-[#FFF3F7] rounded-2xl p-4 text-center">
          <Droplets className="mx-auto text-pink-500" size={28} />
          <p className="mt-2 text-sm text-gray-500">Flow</p>
          <p className="font-semibold mt-1">None</p>
        </div>

        {/* Mood */}
        <div className="bg-[#FFF8E8] rounded-2xl p-4 text-center">
          <Smile className="mx-auto text-yellow-500" size={28} />
          <p className="mt-2 text-sm text-gray-500">Mood</p>
          <p className="font-semibold mt-1">Happy</p>
        </div>

        {/* Water */}
        <div className="bg-[#EEF8FF] rounded-2xl p-4 text-center">
          <Heart className="mx-auto text-sky-500" size={28} />
          <p className="mt-2 text-sm text-gray-500">Water</p>
          <p className="font-semibold mt-1">4 / 8</p>
        </div>

      </div>

    </div>
  );
}