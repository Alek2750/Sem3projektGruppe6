import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Logo from './assets/car-logo-template.jpg';
import Rental from './Rental';

class HomeApp extends React.Component {
  static navigationOptions = { title: 'Car Rental' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.h1}>Car Rental</Text>
        <Text style={styles.h2}>Press the button to see all our available cars</Text>
        </View>
        <View style={styles.middleContainer}>
        <Image
          source={Logo}
          style={styles.image}
        />
        </View>
        
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
          <Button
        title="Search for cars"
        onPress={() => this.props.navigation.navigate('rental')}
      />
          </View>
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  home: { screen: HomeApp },
  rental: { screen: Rental },
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },
  h1: {
    color: '#008F68',
    fontSize: 40,
  },
  h2: {
    color: '#FAE042',
    fontSize: 18,
    marginTop: 8,
  },
  image: {
    width: 300,
    height: 260,
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    padding: 8,
    margin: 8,
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    width: '90%',
    margin: 20,
    padding: 10,
  },
});
