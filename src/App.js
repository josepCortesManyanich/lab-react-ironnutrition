import React, {useState} from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foodData from './foods.json';

function App() {
  const [foods, setFoods] = useState(foodData)

  const handleDelete = (name) => {
    const deletedFood = foods.filter(elem => elem.name !== name)
    setFoods(deletedFood)
  }


  return (
    <div className='food'>
        <div>
            {foods.map(elem => {
              return (
                <div key={elem._id}>
                        <FoodBox  onDelete={handleDelete} food={ {
                          name: elem.name,
                          calories: elem.calories,
                          image: elem.image,
                          servings: elem.servings
                    }} />

                </div> 
              )
              })} 
          
        </div>       
        
                      
       
    </div>
    
  );
}

export default App;
