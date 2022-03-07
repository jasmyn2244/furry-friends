import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import './HomePage.css';
import { Link } from 'react-router-dom';
//import paw from '../assets/veterinary.png'
import heart from '../../assets/icons8-dog-paw-print-48.png'
import arrow from '../../assets/next.png'

function HomePage({ dog, getNewDog, addToFavorites }) {

  return (
    <>
      <div className="header">
        <div>
          <h1 className="home-page-title">Furry Friends</h1>
          {/* <img className="dogpaw" src={paw} alt="dog paw"></img> */}
        </div>
        <Link to="/favorites">
          <button className="favorites-button">Favorites</button>
        </Link>
      </div>
      <img className="home-page-pic" src={dog} />
      <div className='lower-buttons'>
        <a>
          <img className="fav-icon" src={heart} alt="paw print heart" onClick={() => { addToFavorites() }} />
        </a>
        <img className="arrow" src={arrow} alt="Right arrow" onClick={() => { getNewDog() }}></img>
        {/* <button>Doggy Deets</button> */}
      </div>
    </>
  )
}

export default HomePage

HomePage.propTypes = {
  dog: PropTypes.string,
  addToFavorites: func,
  getNewDog: func
}