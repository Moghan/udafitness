import { ADD_CARD, ADD_DECK, SET_DECKS } from '../actions/tokens';
import * as API from '../utils/api';

const decks = (state = {}, action) => {
  switch(action.type) {
    case ADD_DECK: {
      const { id, name } = action;
      return {
        ...state,
        [id]: {
          name,
          cards: []
        } 
      }
    }
    case ADD_CARD: {
      const { deckId, card } = action;
      const modifiedDeck = {
        ...state[deckId],
        cards: [...state[deckId].cards, card]
      }

      API.modifyEntry(deckId, modifiedDeck);
      return {
        ...state,
        [deckId]: modifiedDeck
      }
    }
    case SET_DECKS: {
      const { decks } = action;
      return {
        ...decks
      }
    }
    default: return state;
  }
}

export default decks;