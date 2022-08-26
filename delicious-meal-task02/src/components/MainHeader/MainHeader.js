import React from 'react';

import { MealSummary } from '../Body/MealSummary';
import Navigation from './Navigation';

import classes from './MainHeader.module.css';

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