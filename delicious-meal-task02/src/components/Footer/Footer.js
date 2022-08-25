import React, { useEffect, useState } from "react";

import classes from "./Footer.module.css";
import { SliderData } from "./Slider";

function Footer() {

  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurIndex(curIndex === SliderData.length - 1 ? 0 : curIndex + 1)
    }, 500);
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

export default Footer;
