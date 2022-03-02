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
      allPhotos: [],
      greyScale: [],
      sizeFiltered: [],
      error: null,
    }
  }

  render() {
    return (
      <>
       s */}
        <Switch>
          <Route path='/' render={() => <HomePage />} />
          <Route path='/favorites' render={() => <FavoritesPage />} />
          <Route path='*' render={() => <ErrorPage />} />
        </Switch>
      </>
    );
  }
}

export default App;
