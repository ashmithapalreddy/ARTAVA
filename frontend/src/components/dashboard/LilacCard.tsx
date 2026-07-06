import { Sparkles, ArrowRight } from "lucide-react";

export default function LilacCard() {
  return (
    <div className="mt-6 rounded-3xl bg-gradient-to-r from-[#EADCF1] to-[#F7EEF7] p-6 shadow-lg">

      <div className="flex justify-between items-start">

        <div>

          <div className="flex items-center gap-2">
            <Sparkles className="text-[#A67FA6]" size={24} />

            <h2 className="text-xl font-bold text-[#5B4A5B]">
              Lilac AI
            </h2>
          </div>

          <p className="mt-4 text-gray-700 leading-7">
            🌸 Hi Ashmitha!
          </p>

          <p className="text-gray-600 mt-2">
            Based on your cycle, today you may have
            higher energy levels.
          </p>

          <button className="mt-6 bg-[#A67FA6] hover:bg-[#916291] transition text-white px-6 py-3 rounded-xl flex items-center gap-2">

            Ask Lilac

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </div>
  );
}