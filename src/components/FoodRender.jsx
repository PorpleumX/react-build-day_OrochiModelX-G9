import { getRandomThaiFood } from "../Data/apidataFood";
import { useState } from "react";

export default function FoodRender() {
    const [food, setFood] = useState(null);

    const handleFood = async () => {
        const result = await getRandomThaiFood();
        console.log(result);
        setFood(result);
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center bg-slate-900 gap-10">

            {food && (
                <div className="text-center text-white flex flex-col items-center">
                    <h2 className="text-xl font-bold">{food.strMeal}</h2>
                    <img
                        src={food.strMealThumb}
                        alt={food.strMeal}
                        className="w-64 rounded mt-2"
                    />
                    <p>{food.strInstructions}</p>
                </div>
            )}

            <button
                onClick={handleFood}
                className="bg-amber-800 text-white px-5 py-2 rounded-xl"
            >
                Random Food
            </button>
        </div>
    );
}
