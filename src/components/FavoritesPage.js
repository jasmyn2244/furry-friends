import React from 'react';
import './FavoritesPage.css'
import FavCard from './FavCard'

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
      <h1>Here are all the fovorites</h1>
      {favCards}
    </>
  )
}

export default FavoritesPage