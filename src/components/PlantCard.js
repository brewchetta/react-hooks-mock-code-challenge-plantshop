import React, { useState } from "react";

function PlantCard({plant, handleDestroyForever}) {

  const [isInStock, setIsInStock] = useState(true)



  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button onClick={() => setIsInStock(!isInStock)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setIsInStock(!isInStock)}>Out of Stock</button>
      )}
      <button 
        onClick={() => handleDestroyForever(plant)} 
        className="murder-font" 
        style={{background: 'red', color: 'white'}}
      >DESTROY FOREVER</button>
    </li>
  );
}

export default PlantCard;
