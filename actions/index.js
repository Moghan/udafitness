import * as action from './tokens';

export const addDeck = ({ id, name }) => ({
  type: action.ADD_DECK,
  id,
  name
})

export const addCard = ({ card, deckId }) => ({
  type: action.ADD_CARD,
  card,
  deckId
})

export const setDecks = decks => ({
  type: action.SET_DECKS,
  decks
})