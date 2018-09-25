import React, { Component } from 'react'
import {
	StyleSheet,
	Button,
	FlatList,
	ActionSheetIOS,
	View,
	Platform
} from 'react-native'
import ActionButton from 'react-native-action-button'
import Modal from 'react-native-modal'
import { observer } from 'mobx-react'
import ListItem from '../components/CurrencyListItem'
import CurrencyStore from '../store'
import UserState from '../userState'
import { retrieveCurrencies } from '../api_and_storage_calls/currency_storage'
import { pullSavedCurrencies } from '../api_and_storage_calls/pull_currencies'

@observer
export default class CurrencyList extends Component {
	constructor(props) {
		super(props)
		this.currencyStore = CurrencyStore
		this.userState = UserState
	}

	componentDidMount = async () => {
		const retrievedCurrencies = await retrieveCurrencies()
		if (retrievedCurrencies !== null) {
			console.log('past stored currency null check')
			this.currencyStore.placeSavedCurrencies(retrievedCurrencies)
			const fetchedCurrencies = await pullSavedCurrencies(
				this.currencyStore.savedCurrencies
			)
			this.currencyStore.placeCurrencies(fetchedCurrencies)
		} else {
			console.log('nothing stored')
		}
	}

	selectCurrency = () => {
		if (Platform.OS === 'ios') {
			ActionSheetIOS.showActionSheetWithOptions(
				{
					options: ['Cancel', 'Bitcoin', 'Etherium', 'LiteCoin', 'XRP'],
					cancelButtonIndex: 0
				},
				buttonIndex => {
					switch (buttonIndex) {
						case 1:
							this.currencyStore.addCurrency({ name: 'bitcoin', symbol: 'BTC' })
							break
						case 2:
							this.currencyStore.addCurrency({
								name: 'etherium',
								symbol: 'ETH'
							})
							break
						case 3:
							this.currencyStore.addCurrency({
								name: 'litecoin',
								symbol: 'LTC'
							})
							break
						case 4:
							this.currencyStore.addCurrency({ name: 'ripple', symbol: 'XRP' })
							break
					}
				}
			)
		} else if (Platform.OS === 'android') {
			this.userState.changeModalVisibility()
		}
	}

	render() {
		const { currencies } = this.currencyStore
		if (currencies.length !== 0) {
			return [
				<FlatList
					key="flatlist"
					ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
					data={currencies.slice()}
					style={styles.list}
					keyExtractor={(item, index) => item.name}
					renderItem={({ item }) => (
						<ListItem
							item={item}
							navigation={this.props.navigation}
							currencyStore={this.currencyStore}
						/>
					)}
				/>,
				<ActionButton
					key="fab"
					title="Add Currency"
					backgroundColor="rgba(231,76,60,1)"
					onPress={this.selectCurrency}
				/>,
				<Modal
					key="androidModal"
					isVisible={this.userState.modalVisible}
					style={styles.androidModal}>
					<Button title="Test Button" onPress={this.selectCurrency} />
				</Modal>
			]
		} else {
			return [
				<ActionButton
					key="fab"
					title="Add Currency"
					backgroundColor="rgba(231,76,60,1)"
					onPress={this.selectCurrency}
				/>,
				<Modal
					key="androidModal"
					isVisible={this.userState.modalVisible}
					style={styles.androidModal}>
					<Button title="Test Button" onPress={this.selectCurrency} />
				</Modal>
			]
		}
	}
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
		paddingTop: 5,
		backgroundColor: 'white'
	},
	listSeparator: {
		backgroundColor: 'black',
		height: 1,
		marginRight: 20,
		marginLeft: 20
	},
	androidModal: {
		flex: 1,
		justifyContent: 'flex-end',
		margin: 0
	}
})
