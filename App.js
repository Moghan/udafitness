import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AddCard from './components/AddCard';
import AddDeck from './components/AddDeck';
import configureStore from './store';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import DeckList from './components/DeckList';
import PlayDeck from './components/PlayDeck';
import Deck from './components/Deck';
import { setLocalNotification } from './utils/helpers';

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    const store = configureStore();
    
    return (
      <Provider store={store}>
        <Stack />
      </Provider>
    );
  }
}

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
  PlayDeck: {
    screen: PlayDeck,
    navigationOptions: {
      title: "Play Deck"
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: "Deck"
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: "Add Card"
    }
  }
})