import { AsyncStorage } from 'react-native';

const DECK_STORAGE_KEY = 'udafitness:decks';

export const submitEntry = (id, name)  => {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [id]: {
      name,
      cards: []
    }
  }))
}

export const removeEntry = (key) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      data[key] = undefined;
      delete data[key];
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
    })
}

export const modifyEntry = (key, deck) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      data[key] = deck;
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
    })
}

export const getItem = (key) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const deck = JSON.parse(results)[key];
      return deck;
    })
}

export const getDecks = () => {
  /* Uncomment this line to delete all decks */
  // AsyncStorage.removeItem(DECK_STORAGE_KEY);
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      return JSON.parse(results);
    })
}