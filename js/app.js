let dayHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

function genRandom(min, max) {
  return (Math.round(Math.random() * (max - min) + min));
}

function NewCity(minCustomers, maxCustomers, avgSalesPerCust, cityName) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSalesPerCust = avgSalesPerCust;
  this.hourlyCusts = [];
  this.hourlySales = [];
  this.total = 0;
  this.cityName = cityName;
}

NewCity.prototype.locationTotal = function () {
  let total = 0;
  for (let i = 0; i < this.hourlyCusts.length; i++) {
    total += Math.floor(this.hourlyCusts[i] * this.avgSalesPerCust);
  }
  this.total = total;
};

NewCity.prototype.hourTotals = function () {
  let tr = document.getElementById('Hourly Totals');
  let th = document.createElement('th');
  th.appendChild(document.createTextNode('Hourly Totals'));
  tr.appendChild(th);
};

function renderHeading() {

  let tr = document.getElementById('salesTableHeading');
  let th = document.createElement('th');
  th.appendChild(document.createTextNode('Cities'));
  tr.appendChild(th);
  for (let i = 0; i < dayHours.length; i++) {
    let th = document.createElement('th');
    th.appendChild(document.createTextNode(dayHours[i]));
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.appendChild(document.createTextNode('Location Totals'));
  tr.appendChild(th);
}

function renderFooter() {
  let tbl = document.getElementById('Sales');
  let tr = document.createElement('tr');
  tr.setAttribute('id', 'footerRow');
  tbl.appendChild(tr);
  let th = document.createElement('th');
  th.appendChild(document.createTextNode('Hourly Totals'));
  tr.appendChild(th);

  let grandTotal = 0;
  for (let i = 0; i < dayHours.length; i++) {
    let th = document.createElement('th');
    let hourTotals = 0;
    for (let k = 0; k < cities.length; k++) {
      hourTotals += cities[k].hourlySales[i];
    }
    grandTotal += hourTotals;
    th.appendChild(document.createTextNode(hourTotals));
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.appendChild(document.createTextNode('Grand Total = ' + grandTotal));
  tr.appendChild(th);
}

NewCity.prototype.renderRow = function (rowNumb) {
  let tbl = document.getElementById('Sales');
  let tr = document.createElement('tr');
  tr.setAttribute('id', 'row' + rowNumb);
  tbl.appendChild(tr);
  let th = document.createElement('th');
  th.appendChild(document.createTextNode(this.cityName));
  tr.appendChild(th);
  for (let i = 0; i < dayHours.length; i++) {
    let th = document.createElement('th');
    th.appendChild(document.createTextNode(this.hourlySales[i]));
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.appendChild(document.createTextNode(this.total));
  tr.appendChild(th);
};

NewCity.prototype.genSales = function () {
  for (let i = 0; i < dayHours.length; i++) {
    this.hourlyCusts[i] = genRandom(this.minCustomers, this.maxCustomers);
    this.hourlySales[i] = Math.floor(this.hourlyCusts[i] * this.avgSalesPerCust);
  }
  this.locationTotal();
};

let cities = [];

function renderFormRow(event) {
  event.preventDefault();
  cities.push(new NewCity(event.target.minCustomers.value, event.target.maxCustomers.value, event.target.avgSales.value, event.target.cityName.value));
  cities[cities.length - 1].genSales();
  cities[cities.length - 1].renderRow();
}


function main() {

  cities.push(new NewCity(23, 65, 6.3, 'Seattle'));
  cities.push(new NewCity(3, 24, 1.2, 'Tokyo'));
  cities.push(new NewCity(11, 38, 3.7, 'Dubai'));
  cities.push(new NewCity(20, 38, 2.3, 'Paris'));
  cities.push(new NewCity(2, 16, 3.6, 'Lima'));

  renderHeading();
  for (let i = 0; i < cities.length; i++) {
    cities[i].genSales();
    cities[i].renderRow(i);
  }
  renderFooter();
  let formEl = document.getElementById('newCityForm');
  formEl.addEventListener('submit', renderFormRow(event));
}

main();

