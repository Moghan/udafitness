import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
//import { getMetricMetaInfo } from './utils/helpers';

const AddBtn = styled.TouchableOpacity``

export class AddCard extends Component {
  handleOnPress = () => {
    const card = {
      q: "Who's ur daddy ?", 
      a: "FU!"
    }
    this.props.addCard({ deckId: 0, card} );
    console.log('after dispatch');
  }
  render() {
    return (
      <View>
        <Text>
          AddCard
        </Text>
        <AddBtn onPress={this.handleOnPress}>
          <Text>add card</Text>
        </AddBtn>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCard: (deckId, card) => dispatch(addCard(deckId, card)),
})

export default connect(null, mapDispatchToProps)(AddCard);