import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const CurrencyListItem = ({ item, navigate }) => (
	<TouchableHighlight onPress={navigate(item)}>
		<View style={styles.itemContainer}>
			<Text style={styles.currencyName}>{item.name}</Text>
			<Text style={styles.justifyContent}>{item.usd}</Text>
		</View>
	</TouchableHighlight>
)

const styles = StyleSheet.create({
	itemContainer: {
		flex: 1,
		padding: 10,
		backgroundColor: 'white'
	},
	currencyName: {
		textAlign: 'center'
	},
	currencyPrice: {
		justifyContent: 'flex-start'
	}
})

export default CurrencyListItem
