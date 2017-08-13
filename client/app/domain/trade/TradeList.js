class TradeList {

  constructor(){
    this._trades = [];
  }

  add(trade){
    this._trades.push(trade);
  }

  toArray(){
    return [].concat(this._trades);  
  }

}
