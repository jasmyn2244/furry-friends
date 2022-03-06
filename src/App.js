import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage'
import FavoritesPage from './components/favorites/FavoritesPage'
import ErrorPage from './components/error/ErrorPage'
import { getRandomDog } from './api-calls';


class App extends Component {
  constructor() {
    super()
    this.state = {
      dog: {},
      favorites: [],
      error: ""
    }
  }

  componentDidMount() {
    getRandomDog()
      .then(data => this.setState({ dog: data[0] }))
      .catch(error => {
        this.setState({ error: error })
      })
  }

  getNewDog = () => {
    getRandomDog()
      .then(data => this.setState({ dog: data[0] }))
      .catch(error => {
        this.setState({ error: error })
      })
  }

  addToFavorites = () => {
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
    if (this.state.error) {
      return <ErrorPage />
    }
    else {
      return (
        <>
          <Switch>
            <Route exact path='/' render={() => <HomePage dog={this.state.dog} addToFavorites={this.addToFavorites} getNewDog={this.getNewDog} />} />
            <Route path='/favorites' render={() => <FavoritesPage favorites={this.state.favorites} />} />
            <Route path='*' render={() => <ErrorPage />} />
          </Switch>
        </>
      );
    }
  }
}

export default App;
