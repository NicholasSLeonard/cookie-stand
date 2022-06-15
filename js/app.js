let dayHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// let seattle =
// {
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgSales: 6.3,
//   hourlySales: [],
//   total: 0,
//   cityName: 'Seattle'
// };
// let tokyo =
// {
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgSales: 1.2,
//   hourlySales: [],
//   total: 0,
//   cityName: 'Tokyo'
// };
// let dubai =
// {
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgSales: 3.7,
//   hourlySales: [],
//   total: 0,
//   cityName: 'Dubai'
// };
// let paris =
// {
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgSales: 2.3,
//   hourlySales: [],
//   total: 0,
//   cityName: 'Paris'
// };
// let lima =
// {
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgSales: 4.6,
//   hourlySales: [],
//   total: 0,
//   cityName: 'Lima'
// };

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

// NewCity.prototype.displayList = function() {
//   let ul = document.getElementById(this.cityName);
//   for (let i = 0; i < dayHours.length; i++) {
//     let li = document.createElement('li');
//     li.appendChild(document.createTextNode(dayHours[i] + ': ' + Math.floor(this.hourlySales[i] * this.avgSales) + ' cookies'));
//     ul.appendChild(li);
//   }
//   let li = document.createElement('li');
//   li.appendChild(document.createTextNode('Total: ' + this.total + ' cookies'));
//   ul.appendChild(li);
// };



NewCity.prototype.genSales = function() {
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

seattle.genSales();
seattle.displayList();
tokyo.genSales();
tokyo.displayList();
dubai.genSales();
dubai.displayList();
paris.genSales();
paris.displayList();
lima.genSales();
lima.displayList();
