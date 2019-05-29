import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MovieContext from "./Store";

class Home extends Component {
  state = {
    isLoading: true,
    genres: [],
    error: null
  }

  componentDidMount() {
    this.fetchGenres();
    this.fetchMovies();
  }

  async fetchGenres() {
    const res = await fetch('http://192.168.4.187:3000/genres', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (!res) return;
    const resJson = await res.json();
    this.setState({
      genres: resJson,
      isLoading: false
    });
  }

  async fetchMovies() {
    const res = await fetch('http://192.168.4.187:3000/movies', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (!res) return;
    const resJson = await res.json();
    this.context.setMovies(resJson);
  }

  navigateToMovie(item) {
    const { navigate } = this.props.navigation;
    this.context.setGen(item);
    navigate('Movies', {
      title: item,
      byTitle: true
    });
  }

  render() {
    const { isLoading, genres } = this.state;

    // if (error) {
    //   return (
    //     <View style={styles.container}>
    //       <Text>{error}</Text>
    //     </View>
    //   )
    // }

    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text>Fetching Genres</Text>
        ) : (
          
            <FlatList
              data={genres}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <Button
                    title={item}
                    onPress={() => this.navigateToMovie(item)}
                  />
                  <Icon name="arrow-right" size={30} color="white" />
                </View>
              )}
              keyExtractor={(item, index) => item}
            />
            )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  flatList: {

  },
  listItem: {
    height: 40,
    fontSize: 18,
    padding: 10
  }
});
Home.contextType = MovieContext;
export default Home;