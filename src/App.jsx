import { useState } from "react";

function RandomFood() {
  const [food, setFood] = useState(null);

  const getRandomFood = async () => {
    // เอารายการอาหารไทย
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Thai"
    );

    const data = await response.json();

    // สุ่ม 1 เมนู
    const randomIndex = Math.floor(Math.random() * data.meals.length);
    const randomMeal = data.meals[randomIndex];

    // เอา ID ไปขอรายละเอียด
    const detailResponse = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomMeal.idMeal}`
    );

    const detailData = await detailResponse.json();

    setFood(detailData.meals[0]);
  };

  return (
    <div>
      <button
        className="border-2 bg-red-400 text-amber-500"
        onClick={getRandomFood}
      >
        Random Food
      </button>

      {food && (
        <div>
          <h2>{food.strMeal}</h2>

          <img
            src={food.strMealThumb}
            alt={food.strMeal}
            width="300"
          />

          <p>Category: {food.strCategory}</p>
          <p>Area: {food.strArea}</p>
        </div>
      )}
    </div>
  );
}

export default RandomFood;