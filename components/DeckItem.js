import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const AddBtn = styled.TouchableOpacity``
const Btn = styled.TouchableOpacity`
  background: #999;
`

const ItemView = styled.View`
  flex-direction: row;
  padding: 5px 0;
`

export default class DeckItem extends Component {
  render() {
    const { name, cards, id } = this.props.deck;

    return (
      <ItemView >
        <Btn style={{minWidth: 200, marginRight: 'auto', paddingLeft: 5}} onPress={() => this.props.navigation.navigate("Deck", id)}>
          <Text>
            {name} 
          </Text>
        </Btn>
        <Text style={{marginRight: 20}}>
        {`${cards.length} cards.`}
        </Text>
        <Btn style={{marginRight: 5}} onPress={() => this.props.navigation.navigate("AddCard", this.props.deck)}>
          <Text>
            +Card
          </Text>
        </Btn>
      </ItemView>
    )
  }
}