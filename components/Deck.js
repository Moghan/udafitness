import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Btn = styled.TouchableOpacity``

export class Deck extends Component {
  render() {
    const { name , cards } = this.props.navigation.state.params;
    console.log('deck props', name, cards);
    return (
      <View>
        <Btn>
          <Text>
            name
          </Text>
        </Btn>
      </View>
    )
  }
}

const mapStateToProps= (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Deck);