import React, { useState } from "react";
import { Card } from "./Card";
import {ErrorModal} from './ErrorModal';
import classes from './AddMeal.module.css';
import { Button } from "./Button";

function AddMeal(props) {
  const [enteredMeal, setEnteredMeal] = useState("");
  const [enteredAmount, SetEnteredAmount] = useState("");
  const [error, setError] = useState({});

  const mealInputHandler = (event) => {
    setEnteredMeal(event.target.value);
  };

  const amountInputHandler = (event) => {
    SetEnteredAmount(event.target.value);
  };

  const addMealHandler = (event) => {
    event.preventDefault();

    if (enteredMeal.trim().length === 0 || enteredAmount.trim() === 0) {
      setError({
        title: "Invalid input",
        message: "Kindly enter a valid meal and amount",
      });
      return;
    }

    if (+enteredAmount < 1) {
      setError({
        title: "Invalid input",
        message: "Kindly enter a valid amount (amount > 1)",
      });
      return;
    } else {
      props.onAddMeal(enteredMeal, enteredAmount);

      setEnteredMeal("");
      SetEnteredAmount("");
    }
  };

  const errorHandler = () => {
    setError({});
  };

  return (
    <div>
      {!error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorHandler={errorHandler}
        ></ErrorModal>
      )}

{error && (<Card className={classes.input}>
        <form onSubmit={addMealHandler}>
        <h3>Menu</h3>
          <label htmlFor="mealName">Meal Name</label>
          <input
            id={Math.random()}
            type="text"
            value={enteredMeal}
            onChange={mealInputHandler}
          ></input>

          <label htmlFor="mealAmount">Meal Amount</label>
          <input
            id={Math.random()}
            type="text"
            value={enteredAmount}
            onChange={amountInputHandler}
          ></input>
          <Button className={classes.input__button} onClick={addMealHandler}>Add</Button>
          <Button className={classes.input__button} onClick={props.cancelMenuHandler}>Cancel</Button>
        </form>
      </Card>)}
    </div>
  );
}

export default AddMeal;