import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import UserState from '../userState'

class CurrencyListItem extends Component {
	moveToDetail = () => {
		UserState.changeCurrencyName(this.props.item.name)
		this.props.navigation.navigate('CurrencyDetail', {
			currency: this.props.item,
			store: this.props.currencyStore
		});
	}

	render() {
		const { name, data } = this.props.item;
		const { price, volume_24h, percent_change_24h } = data.quote.USD
		return (
			<TouchableHighlight onPress={this.moveToDetail}>
				<View style={styles.itemContainer}>
					<Text style={styles.currencyName}>{name}</Text>
					<Text style={styles.currencyPrice}>{`USD: $${price}`}</Text>
					<Text style={styles.currencyPrice}>{`Change 24 hrs: ${percent_change_24h}`}</Text>
					<Text style={styles.currencyPrice}>{`Volume 24 hrs: ${volume_24h}`}</Text>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	itemContainer: {
		flex: 1,
		padding: 10,
		backgroundColor: 'white'
	},
	currencyName: {
		textAlign: 'center',
		fontSize: 24,
		paddingTop: 5,
		paddingBottom: 8,
	},
	currencyPrice: {
		justifyContent: 'flex-start',
		fontSize: 18,
		padding: 8,
		marginLeft: 10
	}
})

export default CurrencyListItem
