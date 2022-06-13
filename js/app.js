let dayHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

let seattle =
{
    minCustomers: 23,
    maxCustomers: 65,
    avgSales: 6.3,
    hourlySales: []
};
let tokyo =
{
    minCustomers: 3,
    maxCustomers: 24,
    avgSales: 1.2,
    hourlySales: []
};
let dubai =
{
    minCustomers: 11,
    maxCustomers: 38,
    avgSales: 3.7,
    hourlySales: []
};
let paris =
{
    minCustomers: 20,
    maxCustomers: 38,
    avgSales: 2.3,
    hourlySales: []
};
let lima =
{
    minCustomers: 2,
    maxCustomers: 16,
    avgSales: 4.6,
    hourlySales: []
};

function genRandom(min, max) {
    return (Math.round(Math.random() * (max - min) + min));
}

function displayList(city) {
    let ul = document.getElementById('List');
    for (let i = 0; i < dayHours.length; i++) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(dayHours[i] + ": " + city.hourlySales[i] + " cookies"));
        ul.appendChild(li);
    }
    let li = document.createElement('li');
        li.appendChild(document.createTextNode("Total: " + calcTotal(city) + " cookies"));
        ul.appendChild(li);
}

function calcTotal(city)
{
    let total = 0;
    for(let i = 0; i < city.hourlySales.length; i++)
    {
        total += city.hourlySales[i];
    }
    return total;
}

for(let i = 0; i < dayHours.length; i++)
{
    seattle.hourlySales[i] = genRandom(23,65);
}
displayList(seattle);