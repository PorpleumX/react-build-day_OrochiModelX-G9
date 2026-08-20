import { useState } from "react";
import { Exercises } from "../Data/mockdataExercises";

const Randomizer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleRandomClick = () => {
    setIsLoading(true);
    setResult(null);

    // หมวดออกกำลังกาย
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * Exercises.length);
      const randomExercise = Exercises[randomIndex];

      setResult({
        name: randomExercise.name,
        description: randomExercise.description,
        image: <span className="text-6xl">🏃</span> 
      });
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto border border-gray-100 w-full">
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">วันนี้เอาอะไรดี?</h2>

      {/* พื้นที่แสดงผลลัพธ์ */}
      <div className="min-h-[160px] w-full flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 mb-6 p-4">
        
        {isLoading ? (
          <div className="flex flex-col items-center animate-pulse">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p className="text-gray-500 font-medium">กำลังสุ่มข้อมูล...</p>
          </div>
        ) : result ? (
          <div className="text-center animate-fade-in-up">
            <div className="mb-3">{result.image}</div>
            <h3 className="text-xl font-bold text-gray-800">{result.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{result.description}</p>
          </div>
        ) : (
          <div className="text-center">
            <span className="text-4xl">🎲</span>
            <p className="text-gray-400 mt-2 font-medium">คลิกปุ่มด้านล่างเพื่อเริ่มสุ่มเลย!</p>
          </div>
        )}
      </div>

      {/* ปุ่มกดสุ่ม */}
      <button
        onClick={handleRandomClick}
        disabled={isLoading}
        className={`w-full py-3 px-6 rounded-lg text-white font-bold text-lg transition-all duration-300 transform ${
          isLoading 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-gradient-to-r from-green-500 to-emerald-600 hover:-translate-y-1 hover:shadow-lg"
        }`}
      >
        {isLoading ? "กำลังประมวลผล..." : "สุ่มหมวดออกกำลังกาย!"}
      </button>

    </div>
  );
};

export default Randomizer;
