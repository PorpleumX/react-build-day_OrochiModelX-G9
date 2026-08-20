import { useState } from "react";
import { Exercises } from "../Data/mockdataExercises";
import { getRandomThaiFood } from "../Data/apidataFood";

const Randomizer = () => {
  // TODO: ในอนาคตเมื่อคนที่ 1 ทำ Context เสร็จ ให้เปลี่ยนมาดึง State จาก Context แทน
  // เช่น const { isLoading, result, category, randomize } = useAppContext();
  
  // จำลอง State ขึ้นมาใช้ชั่วคราว
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [tempCategory, setTempCategory] = useState("Food"); // จำลอง Category ที่เลือก

  // ฟังก์ชันสุ่มข้อมูล
  const handleRandomClick = async () => {
    setIsLoading(true); // เริ่มแสดงสถานะกำลังโหลด
    setResult(null); // เคลียร์ผลลัพธ์เก่าทิ้ง

    if (tempCategory === "Food") {
      // สุ่มอาหารผ่าน API (ของจริง)
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
      // หมวดออกกำลังกาย (จำลองเวลาโหลดนิดหน่อยให้สมจริง)
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
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto mt-8 border border-gray-100">
      
      <h2 className="text-2xl font-bold text-gray-800 mb-4">วันนี้เอาอะไรดี?</h2>

      {/* ปุ่มสลับโหมดชั่วคราว (เพื่อทดสอบ Component ของเรา) */}
      <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
        <button 
          onClick={() => { setTempCategory("Food"); setResult(null); }}
          className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${tempCategory === "Food" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:bg-gray-200"}`}
        >
          🍛 อาหาร
        </button>
        <button 
          onClick={() => { setTempCategory("Exercise"); setResult(null); }}
          className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${tempCategory === "Exercise" ? "bg-white text-green-600 shadow-sm" : "text-gray-500 hover:bg-gray-200"}`}
        >
          💪 ออกกำลังกาย
        </button>
      </div>

      {/* พื้นที่แสดงผลลัพธ์ (Conditional Render) */}
      <div className="min-h-[160px] w-full flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 mb-6 p-4">
        
        {isLoading ? (
          // เงื่อนไขที่ 1: กำลังโหลด (สุ่มอยู่)
          <div className="flex flex-col items-center animate-pulse">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p className="text-gray-500 font-medium">กำลังสุ่มข้อมูล...</p>
          </div>
        ) : result ? (
          // เงื่อนไขที่ 2: สุ่มเสร็จแล้ว และมีผลลัพธ์
          <div className="text-center animate-fade-in-up">
            <div className="mb-3">{result.image}</div>
            <h3 className="text-xl font-bold text-gray-800">{result.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{result.description}</p>
          </div>
        ) : (
          // เงื่อนไขที่ 3: ยังไม่ได้กดสุ่ม
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
            : tempCategory === "Food"
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:-translate-y-1 hover:shadow-lg"
              : "bg-gradient-to-r from-green-500 to-emerald-600 hover:-translate-y-1 hover:shadow-lg"
        }`}
      >
        {isLoading ? "กำลังประมวลผล..." : `สุ่มหมวด${tempCategory === "Food" ? "อาหาร" : "ออกกำลังกาย"}!`}
      </button>

    </div>
  );
};

export default Randomizer;
