import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  function addPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  function handleDestroyForever(plantToDelete) {
    fetch(`http://localhost:6001/plants/${plantToDelete.id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (res.ok) {

        const filteredPlants = plants.filter(plant => plant.id !== plantToDelete.id)

        setPlants(filteredPlants)

      }
    })
  }

  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  console.log(filteredPlants);

  return (
    <main>
    <NewPlantForm addPlant={addPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredPlants} handleDestroyForever={handleDestroyForever} />
    </main>
  );
}

export default PlantPage;
