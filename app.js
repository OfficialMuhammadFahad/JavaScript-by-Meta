// console.log(`Hello World`);
var currentTime = 10;
// console.log(currentTime > 9 && currentTime < 17);

// console.log(10 > 9 && 10 < 17);

var currentTime = 7;
// console.log(currentTime < 9 || currentTime > 17);

var score = 8;
// console.log("Mid-level skills: " + score > 0 && score < 10);

var result = 50;

if (result > 40) {
  console.log("You passed the test");
} else {
  console.log("You did not passed the test");
}

var place = "First";

if (place == "First") {
  console.log("Gold");
} else if (place == "Second") {
  console.log("Silver");
} else if (place == "Third") {
  console.log("Bronze");
} else {
  console.log("No Medal");
}

var age = 50;
if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

var day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Do something");
    break;
  case "Tuesday":
    console.log("Do something");
    break;
  case "Wednesday":
    console.log("Do something");
    break;
  case "Thursday":
    console.log("Do something");
    break;
  case "Friday":
    console.log("Do something");
    break;
  case "Saturday":
    console.log("Do something");
    break;
  case "Sunday":
    console.log("Do something");
    break;
  default:
    console.log("There is no such day");
}

for (var i = 1; i <= 8; i++) {
  console.log(i);
}

console.log("Loop done");

for (var j = 10; j > 0; j--) {
  console.log(j);
}

console.log("Loop done");

var count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
console.log("While loop finished");

var count = 5;
while (count >= 1) {
  console.log(count);
  count--;
}
console.log("While loop finished");

for (var i = 1; i <= 2; i++) {
  for (var j = 1; j <= 7; j++) {
    console.table("Week" + " " + i + " " + "Day" + " " + j);
  }
}

for (let i = 1; i <= 10; i++) {
  if (i === 1) {
    console.log("Gold medal");
  } else if (i === 2) {
    console.log("Silver medal");
  } else if (i === 3) {
    console.log("Bronze medal");
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log(i);
  }
}

var i = 1;
if (i == 0 && i == 1) {
  console.log("Hello");
} else {
  console.log("Goodbye");
}

for (i = 0; i < 2; i++) {
  for (var j = 0; j < 3; j++) {
    console.log("Hello");
  }
}

var i = 7;
if (i <= 5) {
  console.log("Hello");
} else if (i <= 10) {
  console.log("Goodnight");
} else {
  console.log("Goodbye");
}

var i = 3;
var j = 5;

if (i == 3 && j < 5) {
  console.log("Hello");
} else {
  console.log("Goodbye");
}

function addTwoNumbers(a, b) {
  var c = a + b;
  console.log(c);
}

addTwoNumbers(10, 109);
addTwoNumbers(10, 19);

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors);

function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}

letterFinder("test", "t");

var letters = "abc";

for (var i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

var clothes = [];
clothes.push("Jeans", "Hoodie", "Sweat-Shirt", "Cargo Pants", "Trouser");
console.log(clothes);

clothes.pop(5);
console.log(clothes);

clothes.push("T-Shirts");
console.log(clothes);

console.log(clothes[2]);

var favCar = {};
var favCar = {};
favCar.color = "Black";
favCar.covertible = true;
console.log(favCar);

var favCar = {};
var favCar = {};
favCar["color"] = "Black";
favCar["covertible"] = true;
console.log(favCar);

var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function () {
  console.log("The engine is running");
};
car.lightsOn = function () {
  console.log("The lights are on.");
};
console.log(car);
car.turnTheKey();
car.lightsOn();

var clothes = [];
clothes.push("gray t-shirt");
clothes.push("green scarf");
clothes.pop();
clothes.push("slippers");
clothes.pop();
clothes.push("boots");
clothes.push("old jeans");
console.log(clothes);

function addTwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("the first argument is not a number");
    } else if (typeof b != "number") {
      throw new ReferenceError("the second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("Error!", err);
  }
}

addTwoNums(5, "5");
console.log("It still works");

function letterFinder(word, match) {
  var condition1 = typeof word == "string" && word.length >= 2;
  var condition2 = typeof match == "string" && match.length >= 1;
  if (condition1 && condition2) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        //if the current character at position i in the word is equal to the match
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else console.log("Please pass correct arguments to the function");
}

letterFinder([], []);
letterFinder("cat", "c");

var result = null;
console.log(result);

try {
  console.log("Hello");
} catch (err) {
  console.log("Goodbye");
}

var x;

if (x === null) {
  console.log("null");
} else if (x === undefined) {
  console.log("undefined");
} else {
  console.log("ok");
}

try {
  throw new Error();
  console.log("Hello");
} catch (err) {
  console.log("Goodbye");
}

try {
  Number(5).toPrecision(300);
} catch (e) {
  console.log("There was an error");
}

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
  return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo);

function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance);

function meal(animal) {
  animal.food = animal.food + 10;
}

var dog = {
  food: 10,
};
meal(dog);
meal(dog);

console.log(dog.food);

function two() {
  return 2;
}

function one() {
  return 1;
}

function calculate(initialValue, incrementValue) {
  return initialValue() + incrementValue() + incrementValue();
}

console.log(calculate(two, one));

var purchase = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = purchase.shoes * purchase.stateTax;
    console.log(`Total Price: ${calculation}`);
  },
};

purchase.totalPrice();

class Cake {
  constructor(lyr) {
    this.layers = lyr + 1;
  }
}

var result = new Cake(1);
console.log(result.layers);

class Animal {
  constructor(lg) {
    this.legs = lg;
  }
}

class Dog extends Animal {
  constructor() {
    super(4);
  }
}

var result = new Dog();
console.log(result.legs);

class Animl {}

class Cat extends Animl {
  constructor() {
    super();
    this.noise = "meow";
  }
}

var result = new Animl();
console.log(result.noise);

class Person {
  sayHello() {
    console.log("Hello");
  }
}

class Friend extends Person {
  sayHello() {
    console.log("Hey");
  }
}

var result = new Friend();
result.sayHello();

const meals = ["soup", "steak", "ice cream"];
let [starter] = meals;
console.log(starter);



let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);

console.log(set);



let obj = {
  key: 1,
  value: 4
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);



function cont(...basket) {
  console.log(basket.length)
}

cont(10, 9, 8, 7, 6);


function scopeTest() {
  var y = 44;

  console.log(x);
}

var x = 33;
scopeTest();



class Cakes {
  constructor(lyr) {
      this.layers = lyr;
  }

  getLayers() {
      return this.layers;
  }
}

class WeddingCake extends Cakes{
  constructor() {
      super(2);
  }

  getLayers() {
      return super.getLayers() * 5;
  }
}

var result = new WeddingCake();
console.log(result.getLayers());



class animal {

}

class Dogs extends animal {
    constructor() {
        super();
        this.noise = "bark";
    }

    makeNoise() {
      return this.noise;
    }
}

class Wolf extends Dogs {
    constructor() {
        super();
        this.noise = "growl";
    }
}

var result = new Wolf();
console.log(result.makeNoise());



function coun(...food) {
  console.log(food.length)
}

coun("Burgers", "Fries", null);



// Types of testing
// 1. E 2 E Testing
// 2. Integration Testing
// 3. Unit Testing


