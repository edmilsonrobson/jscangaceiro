class TradeList {

  constructor(trap) {
    this._trades = [];
    this._trap = trap;
  }

  add(trade) {
    this._trades.push(trade);

    this._trap(this);
  }

  toArray() {
    return [].concat(this._trades);
  }

  totalVolume() {
    let total = 0;

    return this._trades.reduce((total, trade) => total + trade.volume, 0);
  }

  empty() {
    this._trades.length = 0;

    this._trap(this);
  }
}
