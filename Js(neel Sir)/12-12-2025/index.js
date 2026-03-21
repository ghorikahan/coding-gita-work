class car {
    constructor(company, price) {
        this.company = company;
        this.price = price;
    }
    method_1() {
        console.log("method 1");
    }
    static method_2(){
        console.log("method 2");
    }
}
class owner extends car {
    constructor(company, price, name) {
        super(company, price);
        this.name = name;
    }
}

// var car1 = new car("mercedes", 5500000);
// var car2 = new car("tata", 1500000);

var newOwner = new owner("tata", "5500000", "kahan");
console.log("company:" + newOwner.company);
console.log("price:" + newOwner.price);
console.log("owner name:" + newOwner.name);

newOwner.method_1();

owner.method_2(); //we can access this static using only class name not by the class object..