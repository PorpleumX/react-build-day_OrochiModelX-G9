import { useState } from "react";
const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const categories = ["Food", "Exercise"];

  const handleCategory = (cat) => {
    setSelectedCategory(cat);
    console.log(cat);
  };

  return (
    <div className="flex gap-2">
      {categories.map((cat) => (
        <button key={cat} onClick={() => handleCategory(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
};
export default CategorySelector;
