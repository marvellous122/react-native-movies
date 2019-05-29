import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Home from './Components/Home';
import Movies from './Components/Movies';
import MovieDetail from './Components/MovieDetail';

const TabNavigator = createBottomTabNavigator({
  First: {
    screen: MovieDetail
  },
  Second: {
    screen: Movies
  }
});

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Movies: { screen: Movies },
  MovieDetail: { screen: MovieDetail }
});

export default AppNavigator;
