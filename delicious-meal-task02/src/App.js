import React, { Fragment, useState } from 'react';

import Footer from './components/Footer/Footer'
import Header from './components/Layout/Header'
import MainHeader from './components/MainHeader/MainHeader'
import Menu from './components/Menu/Menu'

import classes from './App.module.css'

function App() {
  const [newMealList, setNewMealList] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)

  const addMealHandler = (newMealName, newMealAmount) => {
    setNewMealList((prevMealList) => {
      return [
        ...prevMealList,
        {
          name: newMealName,
          amount: newMealAmount,
          id: Math.random().toString(),
        },
      ]
    })
  }

  const addMenu = () => {
    setMenuOpen(true)
  }

  const removeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <Fragment className={classes.app}>
      {!menuOpen && (
        <div>
          <Header />
          <MainHeader menuHandler={addMenu} />
          <button className={classes.app__button__addMenu} onClick={addMenu}>
            Menu
          </button>
        </div>
      )}
      {menuOpen && (
        <div>
          <Menu
            mealList={newMealList}
            cancelMenuHandler={removeMenu}
            addMealHandler={addMealHandler}
          />
        </div>
      )}
      <Footer />
    </Fragment>
  )
}

export default App
