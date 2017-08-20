class TradeService {

  constructor() {
    this._http = new HttpService();
  }

  getCurrentWeekTrades() {
    return this._http.get('trades/current-week')
      .then((data) => {
        const trades = data.map(item =>
          new Trade(new Date(item.data), item.quantidade, item.valor));
        return trades;
      }, (error) => {
        throw new Error('Failed to fetch current week trades');
      });
  }

  getLastWeekTrades() {
    return this._http.get('trades/last-week')
      .then((data) => {
        const trades = data.map(item =>
          new Trade(new Date(item.data), item.quantidade, item.valor));
        return trades;
      }, (error) => {
        throw new Error('Failed to fetch last week trades');
      });
  }

  getWeekBeforeTheLastTrades() {
    return this._http.get('trades/week-before-the-last')
      .then((data) => {
        const trades = data.map(item =>
          new Trade(new Date(item.data), item.quantidade, item.valor));
        return trades;
      }, (error) => {
        throw new Error('Failed to fetch trades from the week before the last.');
      });
  }

  getTradesFromPeriod() {
    return Promise.all([
      this.getCurrentWeekTrades(),
      this.getLastWeekTrades(),
      this.getWeekBeforeTheLastTrades(),
    ]).then(period =>
      period.reduce((newArray, item) =>
        newArray.concat(item), [])
        .sort((a, b) =>
          b.date.getTime() - a.date.getTime()))
      .catch((error) => {
        console.log(error);
        throw new Error('Failed to fetch trades from period');
      });
  }
}
