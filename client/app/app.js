const controller = new TradeController();

const $ = document.querySelector.bind(document);

$('.form').addEventListener('submit', controller.add.bind(controller));
$('#delete-button').addEventListener('click', controller.erase.bind(controller));
$('#import-button').addEventListener('click', controller.importTrades.bind(controller));
