let dayHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function genRandom(min, max) {
  return (Math.round(Math.random() * (max - min) + min));
}

function NewCity(minCustomers, maxCustomers, avgSales, cityName) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSales = avgSales;
  this.hourlySales = [];
  this.total = 0;
  this.cityName = cityName;
}

NewCity.prototype.calcTotal = function () {
  let total = 0;
  for (let i = 0; i < this.hourlySales.length; i++) {
    total += Math.floor(this.hourlySales[i] * this.avgSales);
  }
  this.total = total;
};

function renderHeading() {

  let tr = document.getElementById('Cities');
  let th = document.createElement('th');
  th.appendChild(document.createTextNode('Cities'));
  tr.appendChild(th);
  for (let i = 0; i < dayHours.length; i++) {
    let th = document.createElement('th');
    th.appendChild(document.createTextNode(dayHours[i]));
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.appendChild(document.createTextNode('Totals'));
  tr.appendChild(th);
}

NewCity.prototype.renderRow = function () {
  let tr = document.getElementById(this.cityName);
  for (let i = 0; i < dayHours.length; i++) {
    let th = document.createElement('th');
    th.appendChild(document.createTextNode(Math.floor(this.hourlySales[i] * this.avgSales)));
    tr.appendChild(th);
  }
  let th = document.createElement('th');
  th.appendChild(document.createTextNode(this.total));
  tr.appendChild(th);
};



NewCity.prototype.genSales = function () {
  for (let i = 0; i < dayHours.length; i++) {
    this.hourlySales[i] = genRandom(this.minCustomers, this.maxCustomers);
  }
  this.calcTotal();
};

let seattle = new NewCity(23, 65, 6.3, 'Seattle');
let tokyo = new NewCity(3, 24, 1.2, 'Tokyo');
let dubai = new NewCity(11, 38, 3.7, 'Dubai');
let paris = new NewCity(20, 38, 2.3, 'Paris');
let lima = new NewCity(2, 16, 3.6, 'Lima');

renderHeading();
seattle.genSales();
seattle.renderRow();
tokyo.genSales();
tokyo.renderRow();
dubai.genSales();
dubai.renderRow();
paris.genSales();
paris.renderRow();
lima.genSales();
lima.renderRow();
