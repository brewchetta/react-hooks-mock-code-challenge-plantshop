import React, { useState } from "react";

function NewPlantForm({addPlant}) {

  const [formState, setFormState] = useState({
    name: 'Bob',
    image: 'image.com',
    price: 0.05
  })

  function handleChange(e) {
    const newFormState = {...formState, [e.target.name]: e.target.value }
    setFormState(newFormState)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    })
    .then(res => res.json())
    .then(brandNewPlant => addPlant(brandNewPlant))
  }

  const {name, image, price} = formState

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
