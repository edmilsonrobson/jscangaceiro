class TradeController {

  constructor() {
    const $ = document.querySelector.bind(document);
    this._inputDate = $('#date');
    this._inputQuantity = $('#quantity');
    this._inputValue = $('#value');

    this._tradeList = new Bind(
      new TradeList(),
      new TradeListView('#trade-list'),
      'add', 'empty',
    );

    this._message = new Bind(
      new Message(),
      new MessageView('#message-view'),
      'text',
    );
  }

  add(event) {
    try {
      event.preventDefault();
      this._tradeList.add(this._createTrade());
      this._message.text = 'Trade added successfully';
      this._clearFields();
    } catch (err) {
      console.log(err);

      if (err instanceof InvalidDateException) {
        this._message.text = err.message;
      } else {
        this._message.text = 'An unexpected error happened.';
      }
    }
  }

  erase() {
    this._tradeList.empty();
    this._message = 'Trade list erased successfully';
  }

  _createTrade() {
    const trade = new Trade(
      DateConverter.stringToDate(this._inputDate.value),
      parseInt(this._inputQuantity.value, 10),
      parseInt(this._inputValue.value, 10),
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
