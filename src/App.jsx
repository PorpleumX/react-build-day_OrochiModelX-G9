import React, { useState } from "react";
import Randomizer from "./components/Randomizer";
import CategorySelector from "./components/CategorySelector";
import FoodRender from "./components/FoodRender";
import TextRender from "./components/TextRender";

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    return (
        <div className="flex flex-col items-center p-8 bg-white w-full min-h-screen gap-8">
            <p className="text-2xl font-bold">
                วันนี้ฉันจะทำอะไร... 
            </p>
            <CategorySelector
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            {/* เงื่อนไขการแสดงผล: ถ้าเลือก Food ให้โชว์ของเพื่อน, ถ้าเลือก Exercise ให้โชว์ของเราและคำคม */}
            {selectedCategory === "" ? (
                /* 1. กรณี selectedCategory เป็นค่าว่าง ("") -> แสดงแค่ TextRender */
                <div className="w-full max-w-2xl flex flex-col rounded-3xl overflow-hidden shadow-xl">
                    <TextRender />
                </div>
            ) : selectedCategory === "Food" ? (
                /* 2. กรณีเลือก Food */
                <div className="w-full max-w-3xl min-h-[400px] flex flex-col rounded-3xl overflow-hidden shadow-2xl">
                    <FoodRender />
                </div>
            ) : (
                /* 3. กรณีอื่นๆ (เช่น Exercise) */
                <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
                    <Randomizer />
                </div>
            )}
        </div>
    );
};

export default App;
