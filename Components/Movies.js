import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { MovieConsumer } from './Store';

export default class Movies extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    };
  }

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    const title = navigation.getParam('title');
    const byTitle = navigation.getParam('byTitle');

    return (
      <MovieConsumer>
        {({ movies }) => {
          const filteredMovies = movies.filter(movie => {
            if (!byTitle) {
              return movie.director === title;
            }
            const genres = movie.genres;
            return genres.includes(title);
          });

          return (
            <View style={styles.container}>
              <FlatList
                data={filteredMovies}
                renderItem={({ item }) => (
                  <View style={styles.listItem}>
                    <Button
                      title={item.title}
                      onPress={() => navigate('MovieDetail', {
                        movie: item
                      })}
                    />
                  </View>
                )}
                keyExtractor={({ title }, index) => title}
                />
            </View>
          );
        }}
      </MovieConsumer>
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
