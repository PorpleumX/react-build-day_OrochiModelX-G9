import React from 'react'
import Randomizer from './components/Randomizer'
import CategorySelector from "./components/CategorySelector";

const App = () => {
  return (
    <div className='flex flex-col items-center p-8 bg-white w-full min-h-screen gap-8'>
      <CategorySelector />
      <Randomizer />
    </div>
  )
}

export default App;
