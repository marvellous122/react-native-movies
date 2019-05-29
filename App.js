/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
import { MovieProvider } from './Components/Store'
const Main = createAppContainer(AppNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.setMovies = movies => {
      this.setState({ movies });
    };
    this.setGen = gen => {
      this.setState({ gen });
    };
    this.state = {
      gen: null,
      movies: [],
      setMovies: this.setMovies,
      setGen: this.setGen
    };
  }

  render() {
    return (
      <MovieProvider value={this.state}>
        <Main />
      </MovieProvider>
    );
  }
}
