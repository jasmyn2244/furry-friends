import React from 'react';
import './FavCards.css'

function FavCard({ dog }) {
  return (
    <img className="fav-image" src={dog.url} alt='cutest doggo' />
  )
}

export default FavCard