import React, { useState } from 'react'
import Randomizer from './components/Randomizer'
import CategorySelector from "./components/CategorySelector";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Food");

  return (
    <div className='flex flex-col items-center p-8 bg-white w-full min-h-screen gap-8'>
      <CategorySelector 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      <Randomizer category={selectedCategory} />
    </div>
  )
}

export default App;
