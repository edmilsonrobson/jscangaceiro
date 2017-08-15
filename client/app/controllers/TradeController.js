class TradeController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputDate = $('#date');
    this._inputQuantity = $('#quantity');
    this._inputValue = $('#value');
    this._tradeList = new TradeList();
    this._tradeListView = new TradeListView('#trade-list');

    this._tradeListView.update(this._tradeList);
  }

  add(event) {
    event.preventDefault();

    this._tradeList.add(this._createTrade());
    console.log(this._tradeList);

    this._clearFields();
    this._tradeListView.update(this._tradeList);
  }

  _createTrade() {
    let trade = new Trade(
      DateConverter.stringToDate(this._inputDate.value),
      parseInt(this._inputDate.value),
      parseInt(this._inputValue.value),
    );

    return trade;
  }

  _clearFields() {
    this._inputDate.value = '';
    this._inputQuantity.value = 1;
    this._inputValue.value = 0;

    this._inputDate.focus();
  }

}
