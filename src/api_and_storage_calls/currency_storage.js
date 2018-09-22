import { AsyncStorage } from 'react-native'

export async function storeSavedCurrencies(currencies) {
  try {
    const storableCurr = JSON.stringify(currencies.slice())
    await AsyncStorage.setItem('SavedCurrencies', storableCurr)
  } catch (err) {
    console.log(err)
  }
}

export async function retrieveCurrencies() {
  try {
    const currencies = await AsyncStorage.getItem('SavedCurrencies')
    if (currencies !== null) {
      return JSON.parse(currencies)
    }
  } catch (err) {
    console.log(err)
  }
}