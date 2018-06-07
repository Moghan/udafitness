import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import ShowCard from './ShowCard';

const BtnContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
`
const NoBtn = styled.TouchableOpacity`
  background: #c00;
  width: 100px;
  margin: 0 5px;
`
const YesBtn = styled.TouchableOpacity`
  background: #060;
  width: 100px;
  margin:0 5px;
`

export class PlayDeck extends Component {
  state = {
    count: 0,
    rights: 0,
  }

  handleAnswer = (isCorrect) => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      rights: isCorrect ? prevState.rights + 1 : prevState.rights
    }))
  }

  reset = () => {
    this.setState({
      count: 0,
      rights: 0
    });
  }

  render() {
    const { cards } = this.props.navigation.state.params;

    const ShowResult = () => (
      <View>
        <Text>{`You got ${this.state.rights} out of ${cards.length}`}</Text>
        <Text>Play it again ?</Text>
        <BtnContainer>
          <YesBtn onPress={this.reset}>
            <Text>Yes</Text>
          </YesBtn>
          <NoBtn onPress={() => this.props.navigation.navigate("Home")}>
            <Text>No</Text>
          </NoBtn>
        </BtnContainer>
      </View>
    );

    return (
      <View>
        { this.state.count < cards.length ?
          <ShowCard card={cards[this.state.count]} handleAnswer={this.handleAnswer} remainingCount={cards.length - this.state.count}/>
          :
          <ShowResult />
        }
      </View>
    )
  }
}

const mapStateToProps= (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayDeck);