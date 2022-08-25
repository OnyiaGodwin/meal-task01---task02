import React, { useState, useEffect } from "react";
import classes from "./ImageSlider.module.css";
import { SliderData } from "./SliderData";


function ImageSlider() {
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurIndex(curIndex === SliderData.length - 1 ? 0 : curIndex + 1)
    }, 3000);
    return () => clearTimeout(timer);
  }, [curIndex]);

  return (
    <div className={classes.imageSlider}>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={
              index === curIndex
                ? classes.imageSlider_slide_active
                : classes.imageSlider_slide
            }
            key={index}
          >
            {index === curIndex && (
              <img
                src={slide.image}
                alt=""
                className={classes.imageSlider_image}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ImageSlider;
