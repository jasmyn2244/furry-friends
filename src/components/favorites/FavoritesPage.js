import React from 'react';
import './FavoritesPage.css'
import FavCard from './FavCard'
import { Link } from 'react-router-dom';

function FavoritesPage({ favorites }) {

  const favCards =
    favorites.map(dog => {
      return (
        <FavCard
          key={dog.id}
          dog={dog}
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