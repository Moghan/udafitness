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

export class DeckItem extends Component {
  render() {
    const { name, cards } = this.props.deck;
    console.log('deckitem ',this.props.deck);
    return (
      <ItemView >
        <Btn style={{minWidth: 200, marginRight: 'auto', paddingLeft: 5}} onPress={() => this.props.navigation.navigate("Deck", this.props.deck)}>
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

const mapStateToProps= (state) => ({})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckItem);