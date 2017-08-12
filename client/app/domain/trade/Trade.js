class Trade {

  constructor(date, quantity, value) {
    this._date = date;
    this._quantity = quantity;
    this._value = value;
  }

  get volume() {
    return getQuantity() * getValue();
  }

  get quantity() {
    return this._quantity;
  }

  get value() {
    return this._value;
  }

}
