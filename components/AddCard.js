import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const AddBtn = styled.TouchableOpacity`
  background: #933;
`
const Input = styled.TextInput`
  height: 40px;
  width: 100%;
  border-color: gray;
  border-width: 1;
  margin: 10px 0;
  padding: 5px;
`
const CardView = styled.View`
  margin: 5px 5px;
`

export class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleOnPress = () => {
    const { id } = this.props.navigation.state.params;
    const card = {
      ...this.state
    }
    console.log('bef addCard disp', id, card);
    this.props.addCard({ deckId: id, card} );
    console.log('aft addCard disp');
    this.props.navigation.navigate("Home");
  }
  render() {
    const { id } = this.props.navigation.state.params;
    return (
      <CardView>
        <Input value={this.state.question} placeholder='Question..' onChangeText={(question) => this.setState({question})} />
        <Input value={this.state.answer} placeholder='Answer..' onChangeText={(answer) => this.setState({answer})} />
        <AddBtn onPress={this.handleOnPress} disabled={this.state.question.length === 0 || this.state.answer.length === 0} >
          <Text style={{padding: 5 }}>Add card</Text>
        </AddBtn>
      </CardView>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCard: (deckId, card) => dispatch(addCard(deckId, card)),
})

export default connect(null, mapDispatchToProps)(AddCard);