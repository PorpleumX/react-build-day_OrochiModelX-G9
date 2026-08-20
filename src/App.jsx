import React, { useState } from 'react'
import Randomizer from './components/Randomizer'
import CategorySelector from "./components/CategorySelector";
import FoodRender from "./components/FoodRender";
import TextRender from "./components/TextRender";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Food");

  return (
    <div className='flex flex-col items-center p-8 bg-white w-full min-h-screen gap-8'>
      <CategorySelector 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      
      {/* เงื่อนไขการแสดงผล: ถ้าเลือก Food ให้โชว์ของเพื่อน, ถ้าเลือก Exercise ให้โชว์ของเราและคำคม */}
      {selectedCategory === "Food" ? (
        // ห่อ FoodRender ของเพื่อนด้วย div ของเราเพื่อกาง layout ออก โดยไม่ไปแตะไฟล์ของเพื่อน
        <div className="w-full max-w-3xl min-h-[400px] flex flex-col rounded-3xl overflow-hidden shadow-2xl">
          <FoodRender />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
          <Randomizer />
          {/* ห่อ TextRender ของเพื่อนด้วย div ของเราเช่นกัน */}
          <div className="w-full flex flex-col rounded-3xl overflow-hidden shadow-xl">
            <TextRender />
          </div>
        </div>
      )}
    </div>
  )
}

export default App;
