import React from 'react'

import { Card } from './Card'
import { Button } from './Button'

import classes from './MealList.module.css'

function MealList(props) {
  const mealDataList = props.meal.map((meal) => {
    const deleteItem = (items, index) => {
      return () => items.filter((_, i) => i !== index)
    }

    return (
      <li key={meal.id}>
        {meal.name} : &#8358;{meal.amount}
          <Button
            className={classes.delete__button}
            onClick={deleteItem(meal, meal.id)}
          >
            Delete
          </Button>
      </li>
    )
  })

  return (
    <Card className={classes.meal}>
      <ul>{mealDataList}</ul>
    </Card>
  )
}

export default MealList
