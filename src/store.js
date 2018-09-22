import { observable, action } from 'mobx'
import { pullSingleCurrency } from './api_and_storage_calls/pull_currencies'
import { storeSavedCurrencies } from './api_and_storage_calls/currency_storage'

class CurrencyStore {

	@observable
	currencies = []

	@observable
	savedCurrencies = []

	@observable
	alerts = []

	@action
	addCurrency = async (currency) => {
		for (let value of this.savedCurrencies) {
			if (value.name === currency.name) return
		}

		this.savedCurrencies.push(currency)
		storeSavedCurrencies(this.savedCurrencies)

		const pulledCurr = await pullSingleCurrency(currency)
		this.currencies.push({ name: pulledCurr.slug, data: pulledCurr })
	}

	@action
	placeCurrencies = (currencies) => {
		currencies.forEach((currency) => {
			this.currencies.push({ name: currency.slug, data: currency })
		})
	}

	@action
	placeSavedCurrencies = (currencies) => {
		this.savedCurrencies = currencies
	}

	@action
	addAlert = alert => {
		this.alerts.push(alert)
		console.log(this.alerts)
	}
}

export default new CurrencyStore()
