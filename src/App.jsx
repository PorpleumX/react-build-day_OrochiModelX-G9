import { useState } from "react";
import CategorySelector from "./components/CategorySelector";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Food");

  const categories = ["Food", "Exercise"];

  const cardsData = [
    {
      id: 1,
      title: "ก๋วยเตี๋ยวเรือ",
      category: "Food",
      desc: "แคลอรี่ 350 kcal",
    },
    { id: 2, title: "ข้าวมันไก่", category: "Food", desc: "แคลอรี่ 590 kcal" },
    {
      id: 3,
      title: "วิ่งสวนสาธารณะ",
      category: "Exercise",
      desc: "เบิร์น 300 kcal",
    },
    {
      id: 4,
      title: "เวทเทรนนิ่ง",
      category: "Exercise",
      desc: "เบิร์น 200 kcal",
    },
  ];

  const handleCategory = (cate) => {
    setSelectedCategory(cate);
    console.log(cate);
  };

  const filteredCards = cardsData.filter(
    (item) => item.category === selectedCategory,
  );

  return (
    <div className="flex flex-col bg-slate-200 w-full min-h-screen justify-center items-center">
      <h1>Date: ../../..</h1>
      <CategorySelector
        selectedCategory={selectedCategory}
        categories={categories}
        handleCategory={handleCategory}
        filteredCards={filteredCards}
      />
      
    </div>
  );
};

export default App;
