import { ADD_CARD, ADD_DECK, SET_DECKS } from '../actions';
import { getDecks } from '../utils/api';

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
//console.log('getD ', getDecks());
let deck_initial_state;
getDecks().then((result) => {
  deck_initial_state = result;
});

const decks = (state = deck_initial_state, action) => {
  switch(action.type) {
    case ADD_DECK: {
      const { id, name } = action;
      console.log("add_deck", id, name);
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
      console.log('add_card', deckId, card);
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          cards: [...state[deckId].cards, card]
        }
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