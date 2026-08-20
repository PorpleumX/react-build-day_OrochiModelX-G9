import { useState } from "react";
const CategorySelector = () => {
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
    <>
      <div className="flex gap-2">
        {categories.map((item) => (
          <div key={item} className="mx-2 my-4">
            <button
              onClick={() => handleCategory(item)}
              className={`px-4 py-2 rounded transition-colors ${
                selectedCategory === item
                  ? "bg-amber-400 text-white font-bold"
                  : "bg-white text-gray-700 hover:bg-amber-100"
              }`}
            >
              {item}
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-4 w-full max-w-md">
        {filteredCards.map((card) => (
          <div key={card.id} className="bg-white p-4 rounded border">
            <h2 className="text-lg font-bold text-gray-800">{card.title}</h2>
            <p className="text-gray-600 text-sm mt-1">{card.desc}</p>
            <span className="inline-block mt-3 px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded">
              {card.category}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
export default CategorySelector;
