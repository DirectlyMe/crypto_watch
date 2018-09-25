import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import CurrencyList from './src/screens/CurrencyList'
import CurrencyDetail from './src/screens/CurrencyDetail'
import UserState from './src/userState'


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
      title: UserState.selectedCurrencyName
    })
  },
},
{
  headerMode: 'screen',
  cardStyle: { backgroundColor: '#FFFFFF' }
}
);

export default class App extends Component {
  render() {
    return <Stack />
  }
}


