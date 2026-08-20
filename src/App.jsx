import React from 'react'
import Data  from './Data/apidataFood'
import { useEffect, useState } from "react";

function Food() {
  const [foods, setFoods] = useState([]);}

 useEffect(() => {
    const getFood = async () => {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=");
      const data = await response.json();

      setFoods(data);
    };
     getFood();
  }, []);

 return (
    <div>
      {foods.map(food => (
        <p key={food.id}>{food.name}</p>
      ))}
    </div>
  );


export default App