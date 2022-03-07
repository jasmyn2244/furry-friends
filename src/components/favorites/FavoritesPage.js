import React from 'react';
import './FavoritesPage.css'
import FavCard from './FavCard'
import { Link } from 'react-router-dom';
import PropTypes, { arrayOf } from 'prop-types'


function FavoritesPage({ favorites }) {

  let uniqueNum = 0

  const favCards = favorites.map(fav => {
    uniqueNum++
    return (
      <FavCard
        key={uniqueNum}
        dog={fav}
      />
    )
  })

  return (
    <>
      <div className="fav-header">
        <h1 className="fav-title">Favorites</h1>
        <Link to="/">
          <button className="home-button">Home</button>
        </Link>
      </div>
      <section className="fav-container">
        {favCards}
      </section>
    </>
  )
}

export default FavoritesPage

FavoritesPage.propTypes = {
  favorites: arrayOf(PropTypes.string)
}