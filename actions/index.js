export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const SET_DECKS = 'SET_DECKS';

export const addDeck = ({ id, name }) => ({
  type: ADD_DECK,
  id,
  name
})

export const addCard = card => ({
  type: ADD_CARD,
  card
})

export const setDecks = decks => ({
  type: SET_DECKS,
  decks
})

