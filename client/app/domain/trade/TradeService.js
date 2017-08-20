class TradeService {
  getCurrentWeekTrades(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'trades/current-week');

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          const trades = response.map(data =>
            new Trade(new Date(data.data), data.quantidade, data.valor));
          callback(null, trades);
        } else {
          callback('Failed to fetch current week trades.', null);
        }
      }
    };

    xhr.send();
  }
}
