class TradeController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputDate = $('#date');
    this._inputQuantity = $('#quantity');
    this._inputValue = $('#value');
  }

  add(event) {
    event.preventDefault();
    
    let date = DateConverter.stringToDate(this._inputDate.value);
    let trade = new Trade(
      date,
      parseInt(this._inputDate.value),
      parseInt(this._inputValue.value),
    );

    let dateString = DateConverter.dateToString(date);
    console.log(dateString);
    console.log(trade);
  }

}
