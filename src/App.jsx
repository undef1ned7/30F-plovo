import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./style.css";
import DishForm from "./components/DishForm/DishForm";
import Dishes from "./components/Dishes/Dishes";
import DishItem from "./components/Dishes/DishItem";
import Cart from "./components/Cart/Cart";
const App = () => {
  const [addDish, setAddDish] = useState([
    {
      id: 1,
      name: "plov",
      description: "good plov",
      image:
        "https://e3.edimdoma.ru/data/recipes/0006/6573/66573-ed4_wide.jpg?1468336713",
      price: 1200,
    },
  ]);
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
          <div className="col-4">
            <Cart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
