import { getInteractionStats } from "../app/actions";
import { Trophy, Star } from "lucide-react";

export async function GlobalScore() {
  const statsResponse = await getInteractionStats();
  
  if (!statsResponse.success || !statsResponse.data) {
    return (
      <div className="w-full max-w-4xl mx-auto my-12 p-8 bg-blue-100 rounded-[3rem] border-8 border-blue-300 text-center shadow-xl">
        <p className="text-xl font-bold text-blue-800">
          Nie udało się wczytać wyników... 😔
        </p>
      </div>
    );
  }

  const data = statsResponse.data;
  
  // Find specific interactions, or total up
  const boneStats = data.find((s) => s.actionType === "bone_found");
  const boneCount = boneStats ? boneStats.count : 0;

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-8 bg-blue-500 rounded-[3rem] border-8 border-blue-400 text-center shadow-[0_10px_0_0_rgba(59,130,246,0.5)] transform hover:-translate-y-2 transition-transform duration-300">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="bg-yellow-400 p-4 rounded-full border-4 border-yellow-300 shadow-lg animate-bounce">
          <Trophy className="w-16 h-16 text-yellow-800" fill="currentColor" />
        </div>
        <div className="text-white text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-md">
            Wielki Wynik!
          </h2>
          <p className="text-2xl font-bold text-blue-100 flex items-center gap-2">
            <Star className="w-8 h-8 text-yellow-300" fill="currentColor" />
            Dzieci znalazły już <span className="text-yellow-300 text-4xl mx-2 font-black tracking-widest">{boneCount}</span> kości!
            <Star className="w-8 h-8 text-yellow-300" fill="currentColor" />
          </p>
        </div>
      </div>
    </div>
  );
}
