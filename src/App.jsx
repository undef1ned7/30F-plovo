import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Dishes from "./components/Dishes/Dishes";
import DishForm from "./components/DishForm/DishForm";
import Header from "./components/Header/Header";
import "./style.css";
import { getProducts } from "./utils/request";
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

  const [cartDishes, setCartDishes] = useState([]);

  const createDish = (dish) => {
    axios.post('http://localhost:7000/products', dish)
    .then(() => getProducts(setAddDish))
    .catch((e) => console.log(e))
  };

  const addToCart = (dish) => {
    setCartDishes((prev) => {
      const existingIndex = prev.findIndex((cartItem) => {
        return cartItem.dish === dish;
      });
      if (existingIndex !== -1) {
        const itemsCopy = [...prev];
        const itemCopy = { ...itemsCopy[existingIndex] };
        itemCopy.amount++;
        itemsCopy[existingIndex] = itemCopy;

        return itemsCopy;
      } else {
        return [...prev, { dish, amount: 1 }];
      }
    });
  };

 

  useEffect(() => {
    getProducts(setAddDish)
  }, []);

  // const arr = [1, 2, 3, 4, 5, 6];

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
            <Dishes dishes={addDish} addToCart={addToCart} setAddDish={setAddDish} />
          </div>
          <div className="col-4">
            <Cart cartDishes={cartDishes} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
