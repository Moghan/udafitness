import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import ShowCard from './ShowCard';

const BtnContainer = styled.View`

`
const NoBtn = styled.TouchableOpacity``
const YesBtn = styled.TouchableOpacity``

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

  render() {
    const { cards } = this.props.navigation.state.params;
    console.log('play deck cards ', cards);
    console.log(this.state);

    const ShowResult = () => (
      <View>
        <Text>{`You got ${this.state.rights} out of ${cards.length}`}</Text>
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