import React from 'react';

function PhotoCard({ photo }) {


  return (
    <img src={photo.url} alt={`Image by ${photo.author}`} />
  )
}

export default PhotoCard