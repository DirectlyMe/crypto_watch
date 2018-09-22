export async function pullSingleCurrency(currency) {
	try {
		let response = await fetch(
			`http://192.168.1.120:8080/currency/get-currency/${currency.symbol}`
		)
		let responseJson = await response.json()
		return responseJson[currency.symbol]
	} catch (error) {
		console.error(error)
	}
}

export async function pullSavedCurrencies(currencies) {
	const fetchedCurrencies = []
	try {
		await Promise.all(
			currencies.map(async (currency) => {
				let response = await fetch(
					`http://192.168.1.120:8080/currency/get-currency/${currency.symbol}`
				)
				let responseJson = await response.json()
				fetchedCurrencies.push(responseJson[currency.symbol])
			})
		)
		return fetchedCurrencies
	} catch (err) {
		console.log(err)
	}
}
