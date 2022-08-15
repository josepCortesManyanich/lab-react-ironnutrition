import React, {useState} from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import SearchBar from './components/SearchBar';
import foodData from './foods.json';

function App() {
  const [foods, setFoods] = useState(foodData)

  const handleDelete = (name) => {
    const deletedFood = foods.filter(elem => elem.name !== name)
    setFoods(deletedFood)
  }

  const handleCreateFood = (food) => {
    const newFood = [...foods]
     newFood.push(food)
     setFoods(newFood)
  }

  const handleSearchFood = (searchedFood) => {
    if(searchedFood === ''){
      setFoods(foodData)
    } else{
      const searched = foods.filter (elem => elem.name.toLowerCase().includes((searchedFood).toLowerCase()))
      setFoods (searched)
    }
  }


  return (
    <div className='food'>
      
        <SearchBar onSearch={handleSearchFood}/>
      

      <div>
         <AddFoodForm createdFood={handleCreateFood} />
      </div> 
        
        
        
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
