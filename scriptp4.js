class Worker {
  constructor(firstName, secondName, rate, days) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

const worker = new Worker("Ivan", "Ivanov", 10, 31);
console.log(worker.firstName);
console.log(worker.secondName);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

const worker1 = new Worker("John", "Lennon", 11, 22);
const worker2 = new Worker("Jane", "Foster", 21, 32);
const totalSalary = worker1.getSalary() + worker2.getSalary();
console.log("Total salary:", totalSalary);

class MyString {
  reverse(str) {
    return str.split("").reverse().join("");
  }
  ucFirst(str2) {
    let n = str2.charAt(0).toUpperCase();
    for (let i = 1; i < str2.length; i++) {
      n += str2.charAt(i).toLowerCase();
    }
    return n;
  }
  ucWords(str3) {
    let strVal = "";
    let str = str3.split(" ");  
    for (let j = 0; j < str.length; j++) {
      strVal +=
        str[j].substring(0, 1).toUpperCase() +
        str[j].substring(1, str[j].length) +
        " ";
    }
    return strVal;
  }
}

const str = new MyString();
console.log(str);
console.log(str.reverse("IVAN"));
console.log(str.ucFirst("arsenal"));
console.log(str.ucWords("arsenal arsenal arsenal"));

class CoffeeMake {
  constructor(mark, model) {
    this.mark = mark;
    this.model = model;
    this.status = false;
    this.weight = 5;
  }
  on() {
    this.status = true;
    console.log(`Coffee maker on.`);
  }
  off() {
    this.status = false;
    console.log(`Coffee maker off.`);
  }
}
let c1 = new CoffeeMake("Okko", "Chini");
console.log(c1);
console.log(c1.status);
c1.on();
c1.off();

class DripCoffeeMaker extends CoffeeMake {
  constructor(mark, model, amountOfcoffee, coffeeBrewingSpeed) {
    super(mark, model);
    this.amountOfcoffee = amountOfcoffee;
    this.coffeeBrewingSpeed = coffeeBrewingSpeed;
  }
  brew() {
    if (this.status) {
      console.log("FrenchPressCoffeeMaker on");
    } else {
      console.log("FrenchPressCoffeeMaker off");
    }
  }
}

let c2 = new DripCoffeeMaker("Jura", "Inisa", "300", "20");
console.log(c2);
console.log(c2.status);
c2.brew();
c2.on();
c2.off();
console.log(c2 instanceof CoffeeMake);

class FrenchPressCoffeeMaker extends CoffeeMake {
  constructor(mark, model, power) {
    super(mark, model);
    this.power = power;
    this.height = 1;
    this.color = "red";
  }
  brew() {
    if (this.status) {
      console.log("FrenchPressCoffeeMaker on");
    } else {
      console.log("FrenchPressCoffeeMaker off");
    }
  }
}

let c3 = new FrenchPressCoffeeMaker("Suni", "Apachi", "50");
console.log(c3);
console.log(c3.status);
c3.brew();
c3.on();
c3.off();
console.log(c3 instanceof CoffeeMake);

class EspressoMachine extends CoffeeMake {
  constructor(mark, model, voltage) {
    super(mark, model);
    this.voltage = voltage;
    this.color = "black";
  }
  brew() {
    console.log("EspressoMachine on");
  }
}

let c4 = new EspressoMachine("Ida", "Qartus", "12V");
console.log(c4);
console.log(c4.status);
c4.on();
c4.off();
console.log(c4 instanceof CoffeeMake);
