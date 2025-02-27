import React from "react";

const DishItem = ({ dish, onClick, deleteFunc }) => {
  const imageUrl =
    "https://e1.edimdoma.ru/data/recipes/0009/9458/99458-ed4_wide.jpg?1628786370";
  const image = dish.image || imageUrl;

  const imageStyle = {
    background: `url(${image}) no-repeat center center / cover`,
  };


  return (
    <div className="card" onClick={onClick} >
      <div className="row">
        <div className="col-4" style={imageStyle} />
        <div className="col-8" onClick={(e) => e.stopPropagation()}>
          <h4>{dish.name}</h4>
          <p>{dish.description}</p>
          <p>{dish.price} KGS</p>
          <button onClick={deleteFunc}>delete</button>
        </div>
      </div>
    </div>
  );
};

export default DishItem;
