import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { observer } from 'mobx-react'

@observer
export default class CurrencyDetail extends Component {
	constructor(props) {
		super(props)
		this.currencyStore = this.props.navigation.getParam(
			'store',
			'no store found'
		)
	}

	addAlert = () => {
		console.log('price alert clicked')
		this.currencyStore.addAlert('This is a alert!')
	}

	render() {
		const currency = this.props.navigation.getParam('currency', 'name not here')
		const { name, data } = currency
		const { price, volume_24h, percent_change_24h } = data.quote.USD
		return (
			<View style={styles.detailContainer}>
				<Text>{name}</Text>
				<Text>{usd}</Text>
				<Button
					style={styles.alertButton}
					large
					title="Add Price Alert"
					rounded={true}
					raised={true}
					color={'black'}
					backgroundColor="#00FFFF"
					fontSize={20}
					onPress={this.addAlert}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	detailContainer: {
		backgroundColor: 'white'
	},
	alertButton: {
		paddingTop: 30
	}
})
