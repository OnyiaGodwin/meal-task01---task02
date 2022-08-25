import React from "react";
import classes from "./App.module.css";
import ImageSlider from "./components/Slider/ImageSlider";
import { SliderData } from "./components/Slider/SliderData";

function App() {

  return (
    <div className={classes.app}>
      <ImageSlider slides={SliderData} autoPlay={2}/>
    </div>
  );
}

export default App;
