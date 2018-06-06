import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Btn = styled.TouchableOpacity``



export class ShowCard extends Component {
  state = {
    first: true
  }

  handleRights = () => {
    this.setState({
      first: true,
    })
    this.props.handleNext();
  }

  render() {
    const { card } = this.props;
    console.log('show card ', card);
    console.log(this.state);

    return (
      <View>
        { this.state.first ?
          <View>
            <Text>
              {card.question}
            </Text>
            <Btn onPress={() => this.setState({first: false})}>
              <Text>Turn Card</Text>
            </Btn>
          </View>
          :
          <View>
            <Text>
              {card.answer}
            </Text>
            <Btn onPress={() => {
              this.setState({first: true});
              this.props.handleAnswer(true);
            }}>
              <Text>New it.</Text>
            </Btn>
            <Btn onPress={() => this.props.handleAnswer(false)}>
              <Text>Whaaat!</Text>
            </Btn>
          </View>
        }
      </View>
    )
  }
}

const mapStateToProps= (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowCard);