import React, { useState } from "react";

export default function AddFoodForm(props){
    const{ createdFood } = props
    const[name,setName] = useState('')
    const[image,setImage] = useState('')
    const[calories,setCalories] = useState('')
    const[servings,setServings] = useState('')

    const handleForm = (e) => {
        e.preventDefault();
        const food = {
            name: name,
            image: image,
            calories: parseInt(calories),
            servings: parseInt(servings)
        }
        createdFood(food)
        setName('')
        setImage('')
        setCalories('')
        setServings('')
    }

  return (
    <div>
      <h3>Create new Food</h3>
      <form onSubmit={handleForm}>

          <label>Name</label>
            <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => {setName(e.target.value)}} />
          <label>Image</label>
            <input type="text" placeholder="Image url" name="image" value={image} onChange={(e) => {setImage(e.target.value)}} />
          <label>Calories</label>
            <input type="number" placeholder="Calories" name="calories" value={calories} onChange={(e) => {setCalories(e.target.value)}} />
          <label>Servings</label>
            <input type="number" placeholder="Serving" name="servings" value={servings} onChange={(e) => {setServings(e.target.value)}}/>
            
        <button type="submit">Create!</button>
      </form>
    </div>
  )
}
