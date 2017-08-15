const controller = new TradeController();

document.querySelector('.form').addEventListener('submit', controller.add.bind(controller));

document.querySelector('#delete-button').addEventListener('click', controller.erase.bind(controller));
