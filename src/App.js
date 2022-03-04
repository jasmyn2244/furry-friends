import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage'
import FavoritesPage from './components/FavoritesPage'
import ErrorPage from './components/ErrorPage'


class App extends Component {
  constructor() {
    super()
    this.state = {
      dog: {},
      favorites: []
    }
  }

  componentDidMount() {
    fetch('https://api.thedogapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => this.setState({ dog: data[0] }))
  }

  getNewDog = () => {
    fetch('https://api.thedogapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => this.setState({ dog: data[0] }))
  }

  addToFavorites = () => {
    console.log("Does this method work?")
    //let dog = this.state.dog
    if (!this.state.favorites.includes(this.state.dog)) {
      this.setState({ favorites: [...this.state.favorites, this.state.dog] })
    }
  }

  // componentDidMount() {
  //   fetch('https://picsum.photos/v2/list')
  //     .then(response => response.json())
  //     .then(data => this.setState({ allPhotos: data }))
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


  render() {
    return (
      <>
        {console.log("favorites array", this.state.favorites)}
        <Switch>
          <Route exact path='/' render={() => <HomePage dog={this.state.dog} addToFavorites={this.addToFavorites} getNewDog={this.getNewDog} />} />
          <Route path='/favorites' render={() => <FavoritesPage favorites={this.state.favorites} />} />
          <Route path='*' render={() => <ErrorPage />} />
        </Switch>
      </>
    );
  }
}

export default App;
