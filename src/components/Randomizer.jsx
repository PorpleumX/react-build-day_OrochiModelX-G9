import { useState } from "react";

const Randomizer = () => {
  // TODO: ในอนาคตเมื่อคนที่ 1 ทำ Context เสร็จ ให้เปลี่ยนมาใช้ State จาก Context แทน
  // เช่น const { isLoading, result, randomize } = useAppContext();
  
  // จำลอง State ขึ้นมาใช้ชั่วคราว
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  // ฟังก์ชันจำลองการสุ่มข้อมูล
  const handleRandomClick = () => {
    setIsLoading(true); // เริ่มแสดงสถานะกำลังโหลด
    setResult(null); // เคลียร์ผลลัพธ์เก่าทิ้ง

    // จำลองเวลาดึงข้อมูล 1.5 วินาที
    setTimeout(() => {
      setIsLoading(false); // ปิดสถานะกำลังโหลด
      // จำลองผลลัพธ์ที่ได้จากการสุ่ม (หมวดออกกำลังกาย)
      setResult({
        name: "วิดพื้น (Push-ups)",
        description: "บริหารหน้าอก แขน และแกนกลางลำตัว จัดไป 3 เซ็ต!",
        image: "💪"
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto mt-8 border border-gray-100">
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">วันนี้ออกกำลังกายท่าไหนดี?</h2>

      {/* พื้นที่แสดงผลลัพธ์ (Conditional Render) */}
      <div className="min-h-[150px] w-full flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 mb-6 p-4">
        
        {isLoading ? (
          // เงื่อนไขที่ 1: กำลังโหลด (สุ่มอยู่)
          <div className="flex flex-col items-center animate-pulse">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p className="text-gray-500 font-medium">กำลังสุ่มข้อมูล...</p>
          </div>
        ) : result ? (
          // เงื่อนไขที่ 2: สุ่มเสร็จแล้ว และมีผลลัพธ์
          <div className="text-center animate-fade-in-up">
            <div className="text-6xl mb-3">{result.image}</div>
            <h3 className="text-xl font-bold text-blue-600">{result.name}</h3>
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
            : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
        }`}
      >
        {isLoading ? "กำลังประมวลผล..." : "สุ่มเลย!"}
      </button>

    </div>
  );
};

export default Randomizer;
