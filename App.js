import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import CurrencyList from './src/screens/CurrencyList';
import CurrencyDetail from './src/screens/CurrencyDetail'


const Stack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: () => ({
      title: 'Currencies'
    })
  },
  CurrencyDetail: {
    screen: CurrencyDetail,
    navigationOptions: () => ({
      title: 'Details'
    })
  }
})

export default class App extends Component {
  render() {
    return <Stack />
  }
}


