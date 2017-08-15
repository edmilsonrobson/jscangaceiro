class TradeList {

  constructor() {
    this._trades = [];
  }

  add(trade) {
    this._trades.push(trade);
  }

  toArray() {
    return [].concat(this._trades);
  }

  totalVolume() {
    let total = 0;

    return this._trades.reduce((total, trade) => return total + trade.volume, 0);    
  }

}
