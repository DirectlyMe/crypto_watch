import { observable, action } from 'mobx'

class UserState {
  @observable selectedCurrencyName = 'Detail'

  @observable modalVisible = false;

  @action changeCurrencyName = (name) => {
    this.selectedCurrencyName = name
  }

  @action changeModalVisibility = () => {
    this.modalVisible = !this.modalVisible
  }
}

export default new UserState();