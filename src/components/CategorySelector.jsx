const CategorySelector = ({ selectedCategory, onSelectCategory }) => {
  const categories = ["Food", "Exercise"];

  return (
    <div className="flex gap-4 p-2 bg-gray-100 rounded-xl shadow-inner">
      {categories.map((cat) => (
        <button 
          key={cat} 
          onClick={() => onSelectCategory(cat)}
          className={`px-6 py-2 rounded-lg font-bold text-lg transition-all duration-300 ${
            selectedCategory === cat 
              ? "bg-white text-blue-600 shadow-md transform scale-105" 
              : "text-gray-500 hover:bg-gray-200"
          }`}
        >
          {cat === "Food" ? "🍛 อาหาร" : "💪 ออกกำลังกาย"}
        </button>
      ))}
    </div>
  );
};
export default CategorySelector;
