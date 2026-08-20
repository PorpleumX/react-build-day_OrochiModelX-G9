import React from "react";
import FoodRender from "./components/FoodRender";
import TextRender from "./components/TextRender";

const App = () => {
    return (
        <div className="flex flex-col min-w-screen min-h-screen">
          <nav className="bg-slate-600 text-center h-100">
            <h2>Nav</h2>
          </nav>
          <TextRender />
        </div>
    );
};

export default App;
