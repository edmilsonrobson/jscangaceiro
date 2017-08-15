const fields = [
  document.querySelector('#date'),
  document.querySelector('#quantity'),
  document.querySelector('#value'),
];

const tbody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  const tr = document.createElement('tr');

  fields.forEach((field) => {
    const td = document.createElement('td');
    td.textContent = field.value;
    tr.appendChild(td);
  });

  // Also creates a volume column, which is "quantity" times "value"
  const tdVolume = document.createElement('td');
  tdVolume.textContent = fields[1].value * fields[2].value;

  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  fields[0].value = '';
  fields[1].value = 1;
  fields[2].value = 0;
  fields[0].focus();
});
