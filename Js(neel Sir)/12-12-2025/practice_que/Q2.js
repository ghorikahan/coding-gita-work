class car {
    constructor(company, price) {
        this.company = company;
        this.price = price;
    }
}
class owner {
    constructor(name) {
        this.name = name;
    }
}

var car1 = new car("mercedes", 5500000);
var car2 = new car("tata", 1500000);

var owner = new owner("kahan");

console.log(car1);
console.log(car2);
console.log(owner);