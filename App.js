import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AddCard from './components/AddCard';
import AddDeck from './components/AddDeck';
import configureStore from './store';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import DeckList from './components/DeckList';
import Deck from './components/Deck';

export default class App extends React.Component {
  render() {
    console.log("ONLY ONES !!!!");
    const store = configureStore();
    
    return (
      <Provider store={store}>
        <Stack />
      </Provider>
    );
  }
}

const Somecomp = ({navigation}) => (
  <View>
    <Text>
      Some Component
    </Text>
  </View>
);


const Somecomp2 = ({navigation}) => (
  <View>
    <Text>
      222222222222222
    </Text>
  </View>
);
const Stack = createStackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      title: "Home"
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: "AddDeck"
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: "Deck"
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
