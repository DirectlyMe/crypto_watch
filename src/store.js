import { observable, action } from 'mobx';

class CurrencyStore {
  @observable currencies = [
    {
      'name': 'BitCoin',
      'usd': '10,0000',
      'volume': '400,000,000',
    },
    {
      'name': 'LiteCoin',
      'usd': '40.46',
      'volume': '837,192'
    }
  ];

  @observable alerts = [];

  @action addCurrency = (currency) => {
    for (let value of this.currencies) {
      if (value.name === currency.name) return;
    }
    
    this.currencies.push(currency);
  }

  @action addAlert = (alert) => {
    this.alerts.push(alert);
  }
}

export default new CurrencyStore();