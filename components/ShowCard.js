import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Btn = styled.TouchableOpacity`
  width: 100px;
  margin: 0 10px;
  padding: 5px;
  background: #933
`

const CardContainer = styled.View`
  margin: 10px;
  padding: 2px;
  border: 1px solid gray;
`

const QAText = styled.Text`
  margin: 10px auto 0 auto;
  padding: 10px;
  font-size: 12;
`

const CardText = styled.Text`
  margin: 20px auto;
  padding: 10px;
  font-size: 16;
`

const BtnContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
`

const RightBtn = Btn.extend`
  background: #060
`

const WrongBtn = Btn.extend`
  background: #c00
`

export default class ShowCard extends Component {
  state = {
    isFront: true
  }

  handlePressAnswer = (isCorrect) => {
    this.setState({
      isFront: true,
    })
    this.props.handleAnswer(isCorrect);
  }

  render() {
    const { card } = this.props;

    const ShowQuestion = () => (
      <View>
        <QAText>Question</QAText>
        <CardText>{ card.question }</CardText>
        <BtnContainer>
          <Btn onPress={() => this.setState({isFront: false})}>
            <Text>Show answer</Text>
          </Btn>
        </BtnContainer>
      </View>
    );

    const ShowAnswer = () => (
      <View>
        <QAText>Answer</QAText>
        <CardText>{card.answer}</CardText>
        <BtnContainer>
          <RightBtn onPress={() => this.handlePressAnswer(true)}>
            <Text>New it.</Text>
          </RightBtn>
          <WrongBtn onPress={() => this.handlePressAnswer(false)}>
            <Text>Whaaat!</Text>
          </WrongBtn>
        </BtnContainer>
      </View>
    );

    return (
      <CardContainer>
        <Text style={{paddingTop: 5, paddingLeft: 5, fontSize: 9}}>
          {`Remaining questions: ${this.props.remainingCount}`}
        </Text>
        { this.state.isFront ? <ShowQuestion /> : <ShowAnswer /> }
      </CardContainer>
    )
  }
}