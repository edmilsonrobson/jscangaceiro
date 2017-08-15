class TradeListView  extends View {
  template(model) {
    return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATE</th>
                <th>QUANTITY</th>
                <th>VALUE</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
          ${model.toArray().map(trade =>
            `
            <tr>
              <td>${DateConverter.dateToString(trade.date)}</td>
              <td>${trade.quantity}</td>
              <td>${trade.value}</td>
              <td>${trade.volume}</td>
            </tr>
            `
          ).join('')}
        </tbody>

        <tfoot>
          <tr>
            <td colspan="3"></td>
            <td>${model.totalVolume()}</td>
          </tr>
        </tfoot>
    </table>
    `;
  }
}
