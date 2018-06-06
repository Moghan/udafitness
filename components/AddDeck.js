import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import uuid from 'uuid/v4';
import { submitEntry, removeEntry, getDecks } from '../utils/api';
import { addDeck } from '../actions';
import { connect } from 'react-redux';

const SubmitBtn = styled.TouchableOpacity`
  background: #933
`


export class AddDeck extends Component {
  state = {
    text:  ''
  }

  submit = () => {
    const id = uuid();
    const name = this.state.text;

    this.setState({
      text: ''
    })

    this.props.addDeck({id, name});

    // nav home

    submitEntry(id, name);

    //const d = getDecks();
    //console.log('D ', d);
    /*getDecks().then((r) => {
      console.log('R = ', r);
    })*/

  }

  render() {    
    return (
      <View>
        <Text>
          Add Deck
        </Text>
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} />
        <SubmitBtn onPress={this.submit}>
          <Text>Press to create Deck</Text>
        </SubmitBtn>
      </View>
      
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDeck: (deck) => dispatch(addDeck(deck)),
})

export default connect(null, mapDispatchToProps)(AddDeck);