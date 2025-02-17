import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./style.css";
import DishForm from "./components/DishForm/DishForm";
import Dishes from "./components/Dishes/Dishes";
const App = () => {
  const [addDish, setAddDish] = useState([]);
  const createDish = (dish) => {
    setAddDish((prev) => [...prev, dish]);
  };
  console.log("====================================");
  console.log("hello");
  console.log("====================================");
  return (
    <div>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col-4">
            <DishForm onSubmit={createDish} />
          </div>
          <div className="col-4">
            <Dishes dishes={addDish} />
          </div>
          <div className="col-4"></div>
        </div>
      </main>
    </div>
  );
};

export default App;
