import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Btn = styled.TouchableOpacity``

export class Deck extends Component {
  render() {
    const { deck } = this.props;

    return (
      <View>
        <Text>
          {`Deck Title: ${deck.name} , Number of cards: ${deck.cards.length}`}
        </Text>
        <Btn onPress={() => this.props.navigation.navigate("PlayDeck", deck)}>
          <Text>Play Deck</Text>
        </Btn>
        <Btn onPress={() => this.props.navigation.navigate("AddCard", deck)}>
          <Text>Add card</Text>
        </Btn>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  deck: {
    ...state[ownProps.navigation.state.params],
    id: ownProps.navigation.state.params
  }
})

export default connect(mapStateToProps)(Deck);