import React from 'react';

export default function FoodBOx(props) {
    const{food, onDelete} = props
    const totalCalories = food.calories * food.servings
    return(
        <div>
            <div>
                <h2>{food.name}</h2>
                 <img src={food.image} alt={food.image} width="100px" />
                <p>{food.calories}</p>
                <p>{food.servings}</p>
                <p><strong>Total Calories</strong>{totalCalories}kcal</p>
                <button onClick={() => onDelete(food)}>Delete</button>
            </div>
        </div>
    )
}