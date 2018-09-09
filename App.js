import { createStackNavigator } from 'react-navigation'
import CurrencyList from './src/screens/CurrencyList'

export default createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: () => ({
      title: 'Currencies'
    })
  }
})


