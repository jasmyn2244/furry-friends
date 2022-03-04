import React from 'react';


function FavCard({ dog }) {
  return (
    <img src={dog.url} alt='cutest doggo' />
  )
}

export default FavCard