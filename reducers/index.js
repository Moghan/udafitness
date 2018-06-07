import { ADD_CARD, ADD_DECK, SET_DECKS } from '../actions/tokens';
import * as API from '../utils/api';

/*{
  one: {
    name: firstName,
    cards: [
      {
        q: 'first Q',
        a: 'first A'
      },
      {
        q: 'sec Q',
        a: 'sec A'
      },
      {
        q: '3rd Q',
        a: '3rd A'
      }
    ]
  },
  two: {
    name: secondName,
    cards: [
      {
        q: 'first Q - 2',
        a: 'first A - 2'
      },
      {
        q: 'sec Q - 2',
        a: 'sec A - 2'
      },
      {
        q: '3rd Q - 2',
        a: '3rd A - 2'
      }
    ]
  }
};*/

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
      console.log('ADD CARD state[deck] ', state[deckId]);
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