import React from 'react';

import AddMeal from '../UI/AddMeal'
import { Card } from '../UI/Card'
import MealList from '../UI/MealList'

function Menu(props) {
  return (
    <Card>
      <AddMeal onAddMeal={props.addMealHandler} cancelMenuHandler={props.cancelMenuHandler} />
      <MealList meal={props.mealList} />
    </Card>
  )
}

export default Menu
