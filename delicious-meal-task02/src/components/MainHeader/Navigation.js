import React from "react";

import { Button } from "@mui/material";

import classes from "./Navigation.module.css";

function Navigation(props) {

  const preventReload = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.nav}>
      <li>
        <Button style={{ fontSize: "40px", color: 'white' }} onClick={preventReload}>
          Home
        </Button>
      </li>
      <li>
        <Button style={{ fontSize: "40px", color: 'white' }} onClick={props.menuHandler}>
          Menu
        </Button>
      </li>
      <li>
        <Button style={{ fontSize: "40px", color: 'white' }}  onClick={preventReload}>
          Restaurants
        </Button>
      </li>
      <li>
        <Button style={{ fontSize: "40px", color: 'white' }} onClick={preventReload}>
          Home Chefs
        </Button>
      </li>
      <li>
        <Button style={{ fontSize: "40px", color: 'white' }} onClick={preventReload}>
          Offers
        </Button>
      </li>
      <li>
        <Button style={{ fontSize: "40px", color: 'white' }} onClick={preventReload}>
          About us
        </Button>
      </li>
      <Button>Sign up</Button>
    </div>
  );
}

export default Navigation;
