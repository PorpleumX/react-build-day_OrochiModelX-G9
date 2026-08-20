import { useState, useEffect } from "react";
import { Exercises } from "../Data/mockdataExercises";
import { getRandomThaiFood } from "../Data/apidataFood";

const Randomizer = ({ category }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  // เคลียร์ผลลัพธ์เก่าทิ้งทุกครั้งที่เปลี่ยน Category จากด้านบน
  useEffect(() => {
    setResult(null);
  }, [category]);

  const handleRandomClick = async () => {
    setIsLoading(true);
    setResult(null);

    if (category === "Food") {
      const foodData = await getRandomThaiFood();
      if (foodData) {
        setResult({
          name: foodData.strMeal,
          description: `หมวดหมู่: ${foodData.strCategory} | พื้นเพ: ${foodData.strArea}`,
          image: <img src={foodData.strMealThumb} alt="Food" className="w-24 h-24 object-cover rounded-full mx-auto shadow-md" />
        });
      } else {
        setResult({ name: "ดึงข้อมูลผิดพลาด", description: "ลองใหม่อีกครั้ง", image: "❌" });
      }
      setIsLoading(false);
    } else {
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
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto border border-gray-100">
      
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
            : category === "Food"
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:-translate-y-1 hover:shadow-lg"
              : "bg-gradient-to-r from-green-500 to-emerald-600 hover:-translate-y-1 hover:shadow-lg"
        }`}
      >
        {isLoading ? "กำลังประมวลผล..." : `สุ่มหมวด${category === "Food" ? "อาหาร" : "ออกกำลังกาย"}!`}
      </button>

    </div>
  );
};

export default Randomizer;
