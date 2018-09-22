import { observable, action } from 'mobx'

class UserState {
  @observable selectedCurrencyName = 'Detail';

  @observable dialogVisible = false;

  @action changeCurrencyName = (name) => {
    this.selectedCurrencyName = name;
  }

  @action changeDialogVisibility = (visible) => {
    this.dialogVisible = visible;
  }
}

export default new UserState();