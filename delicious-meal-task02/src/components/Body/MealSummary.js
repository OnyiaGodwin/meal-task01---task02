import React from 'react'
import classes from './MealSummary.module.css'

export const MealSummary = function () {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To Your Doorstep</h2>
      <marquee>
        <>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home...
        </>

        <>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </>
      </marquee>
    </section>
  )
}
