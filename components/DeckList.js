import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { getDecks } from '../utils/api';
import { setDecks } from '../actions';
import Deck from './Deck';

const AddBtn = styled.TouchableOpacity``

export class DeckList extends Component {
  componentDidMount() {
    console.log('decklist mount ', this.props.state);
    getDecks().then((result) => {
      this.props.setDecks(result);
    });
  }

  componentDidUpdate() {
    console.log('decklist update ', this.props.deckList);
  }
  render() {
    const { deckList } = this.props;
    console.log("DeckList", deckList);
    return (
      <View>
        { deckList.map((deck, index) => (
          <Deck key={index} deck={deck} />
        )) }
        <AddBtn onPress={() => this.props.navigation.navigate("AddDeck")}>
          <Text>
            Create Deck
          </Text>
        </AddBtn>
      </View>
    )
  }
}

const mapStateToProps= (state = {}) => {
  const deckList = Object.keys(state).map(deck => state[deck]);
  return ({
    deckList
  })
}

const mapDispatchToProps = (dispatch) => ({
  setDecks: (decks) => dispatch(setDecks(decks)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);