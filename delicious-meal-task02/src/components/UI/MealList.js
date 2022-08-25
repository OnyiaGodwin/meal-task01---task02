import { Card } from './Card'
import React from 'react'
import classes from './MealList.module.css'

function MealList(props) {
  const mealDataList = props.meal.map((meal) => {
    return (
      <li key={meal.id}>
        {meal.name} = &#8358;{meal.amount}
      </li>
    )
  })

  // const deleteMealHandler = props.meal.map((arrMeal) => {
  //   let newMeal = arrMeal;
  //   console.log(newMeal)
  //   const index = newMeal.findIndex((item) => item === arrMeal.id)
  //   if (index !== -1) {
  //     newMeal.splice(index, 1)
  //     return newMeal
  //   }
  // })

  return (
    <Card className={classes.meal}>
      <ul>{mealDataList}</ul>
    </Card>
  )
}

export default MealList
