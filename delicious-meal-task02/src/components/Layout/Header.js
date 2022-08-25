import React, { Fragment } from 'react';
import classes from './Header.module.css';
import headerImage from '../../assets/images/header_image.jpg';

function Header() {
    
  return (
    <Fragment>
    <div className={classes.header}>
         <img src={headerImage} alt='A table full of delicious food!' />
    </div>
    </Fragment>
  )
}

export default Header