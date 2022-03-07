import React from 'react';
import './FavCards.css'
import PropTypes from 'prop-types'

function FavCard({ dog }) {
  return (
    <img className="fav-image" src={dog} alt='cutest doggo' />
  )
}

export default FavCard

FavCard.propTypes = {
  dog: PropTypes.string
}