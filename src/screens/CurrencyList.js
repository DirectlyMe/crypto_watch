import React, { Component } from 'react'
import {
	StyleSheet,
	FlatList,
	ActionSheetIOS,
	Button
} from 'react-native'
import { observer } from 'mobx-react'
import ListItem from '../components/CurrencyListItem'
import CurrencyStore from '../store'

@observer
export default class CurrencyList extends Component {
	constructor(props) {
		super(props);
		this.currencyStore = CurrencyStore;
	}

	moveToDetail = ({ item }) => {
		this.props.navigation.navigate('CurrencyDetail', {
			currency: item,
			store: this.store
		})
	}

	renderListItem = ({ item }) => (
				<ListItem
					item={item}
					navigate={() => this.moveToDetail}
				/>
	)

	selectCurrency = () => {
		ActionSheetIOS.showActionSheetWithOptions(
			{
				options: ['Cancel', 'Bitcoin', 'Etherium', 'LiteCoin', 'XRP'],
				cancelButtonIndex: 0
			},
			buttonIndex => {
				switch (buttonIndex) {
					case 1:
						this.currencyStore.addCurrency({ name: 'BitCoin' });
						break;
					case 2:
						this.currencyStore.addCurrency({ name: 'Etherium' });
						break;
					case 3:
						this.currencyStore.addCurrency({ name: 'LiteCoin' });
						break;
					case 4:
						this.currencyStore.addCurrency({ name: 'XRP' });
						break;
				}
			}
		)
	}

	render() {
		const { currencies } = this.currencyStore;
		return [
			<FlatList
				key="flatlist"
				data={currencies.slice()}
				style={styles.list}
				keyExtractor={item => item.name}
				renderItem={this.renderListItem}
			/>,
			<Button
				key={'addbutton'}
				title="Add Currency"
				style={styles.createBtn}
				onPress={this.selectCurrency}
			/>
		]
	}
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
		paddingTop: 5,
		backgroundColor: 'white'
	},
	createBtn: {
		flex: 1,
		backgroundColor: 'white'
	}
})
