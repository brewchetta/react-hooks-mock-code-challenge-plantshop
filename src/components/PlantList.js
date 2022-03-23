import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, handleDestroyForever}) {
  return (
    <ul className="cards">
      {plants.map(plant => <PlantCard key={plant.id} plant={plant} handleDestroyForever={handleDestroyForever} />)}
    </ul>
  );
}

export default PlantList;
