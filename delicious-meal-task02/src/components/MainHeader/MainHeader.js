import React from 'react';
import { MealSummary } from '../Body/MealSummary';
import classes from './MainHeader.module.css';
import Navigation from './Navigation';

function MainHeader(props) {
  return (
    <div className={classes.mainHeader}>
        <h1>BestMeals</h1>
        <Navigation menuHandler={props.menuHandler}/>
        <MealSummary />
    </div>
  )
}

export default MainHeader;