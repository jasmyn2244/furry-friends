import React, { Component } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      dog: {}
    }
  }

  // componentDidMount() {
  //   fetch('https://api.thedogapi.com/v1/images/search')
  //     .then(response => response.json())
  //     .then(data => this.setState({ dog: data[0] }))
  // }

  // componentDidMount() {
  //   return fetch('https://fe-cors-proxy.herokuapp.com', {
  //     headers: {
  //       "Target-URL": "https://picsum.photos/v2/list",
  //       "Accept": "application/json"
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => this.setState({ allPhotos: data }))
  // }

  // makeCards() {
  //   return this.state.photos.map(photo => {
  //     console.log('photo in map', photo)
  //     return (
  //       < PhotoCard
  //         key={photo.id}
  //         photo={photo}
  //       // key="photo.id"
  //       // id="photo.id"
  //       // url="photo.url"
  //       // download_url="photo.download_url"
  //       // height="photo.hight"
  //       // width="photo.width"
  //       // author="photo.author"
  //       />
  //     )
  //   })
  // }

  render() {
    console.log("props", this.props)
    return (
      <>
        <h1>Furry Friends</h1>
        <Link to="/favorites">
          <button>Favorites</button>
        </Link>
        <img src={this.props.dog.url} />
        <button type='submit' onClick={() => this.props.getNewDog()} >Next</button>
        <button onClick={() => this.props.addToFavorites()}>❤️</button>
        <button>Doggy Deets</button>
      </>
    )
  }
}

export default HomePage