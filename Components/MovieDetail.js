import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MovieConsumer } from './Store';

export default class MoveDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('movie').title
    };
  }

  render() {
    const { navigation } = this.props;
    const { navigate, goBack } = navigation;
    const movie = navigation.getParam('movie');

    return (
      <MovieConsumer>
        {({ gen }) => {
          return(
            <View style={styles.container}>
              <View style={styles.contentContainer}>
                <Text style={styles.actors}>Starring {"\n"}{movie.actors.split(", ").join("\n")}</Text>
                <Text style={styles.runtime}>Runtime {movie.runtime} minutes</Text>
                <Text style={styles.plot}>{movie.plot}</Text>
              </View>
              <View style={styles.bottomView}>
                <TouchableOpacity
                  onPress={() => goBack()}
                  style={styles.tabOne}
                >
                  <Text style={styles.text}>{`Other genres ${gen}`}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigate('Movies', {
                    title: movie.director,
                    byTitle: false
                  })}
                  style={styles.tabTwo}
                >
                  <Text style={styles.text}>{`Directed by ${movie.director}`}</Text>
                </TouchableOpacity>
              </View>
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
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 0
  },
  contentContainer: {
    padding: 12,
    flex: 4
  },
  actors: {
    fontSize: 32,
    textAlign: 'center'
  },
  runtime: {
    paddingTop: 12,
    fontSize: 22,
    textAlign: 'center'
  },
  plot: {
    paddingTop: 24,
    flexGrow: 1,
    fontSize: 22,
    textAlign: 'center'
  },
  bottomView: {
    flex: 1,
    width: '100%',
    flexDirection: 'row'
  },
  tabOne: {
    width: 60,
    height: 60,
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderRightWidth: 1
  },
  tabTwo: {
    width: 60,
    height: 60,
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'white',
    borderTopWidth: 1
  },
  text: {
    textAlign: 'center'
  }
});
