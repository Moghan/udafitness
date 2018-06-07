import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { getDecks } from '../utils/api';
import { setDecks } from '../actions';
import Deck from './Deck';
import DeckItem from './DeckItem';

const AddBtn = styled.TouchableOpacity``
const Btn = styled.TouchableOpacity``

export class DeckList extends Component {
  componentDidMount() {
    getDecks().then((result) => {
      this.props.setDecks(result);
    });
  }

  render() {
    const { deckList } = this.props;

    return (
      <View>
        { deckList.map((deck, index) => (
          <DeckItem key={index} deck={deck} navigation={this.props.navigation}/>
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
  const deckList = Object.keys(state).map(deck => ({ ...state[deck], id: deck }));
  return ({
    deckList
  })
}

const mapDispatchToProps = (dispatch) => ({
  setDecks: (decks) => dispatch(setDecks(decks)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);