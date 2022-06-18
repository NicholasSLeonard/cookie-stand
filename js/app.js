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

NewCity.prototype.renderRow = function () {
  let tbl = document.getElementById('Sales');
  let tr = document.createElement('tr');
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

function newDay() {

  cities[0] = new NewCity(23, 65, 6.3, 'Seattle');
  cities[1] = new NewCity(3, 24, 1.2, 'Tokyo');
  cities[2] = new NewCity(11, 38, 3.7, 'Dubai');
  cities[3] = new NewCity(20, 38, 2.3, 'Paris');
  cities[4] = new NewCity(2, 16, 3.6, 'Lima');
  cities[5] = new NewCity(5, 16, 5.9, 'bob');
  cities[6] = new NewCity(2, 126, 3.6, 'dsfa');

  renderHeading();
  for (let i = 0; i < cities.length; i++) {
    cities[i].genSales();
    cities[i].renderRow();
  }
  renderFooter();
}

newDay();

