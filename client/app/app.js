const controller = new TradeController();

document.querySelector('.form').addEventListener('submit', controller.add.bind(controller));
