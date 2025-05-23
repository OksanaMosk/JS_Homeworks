function Car(model, producer, year, maxSpeed, engineVolume) {
  this.model = model;
  this.producer = producer;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.engineVolume = engineVolume;
  this.drive = function () {
    console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
  };
  this.info = function () {
    for (const key in this) {
      console.log("key:", this.key);
    }
  };
  this.increaseMaxSpeed = function (speedToAdd) {
    if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
  };

  this.changeYear = function (newValue) {
    if (newValue < this.year) this.year = newValue;
  };

  this.addDriver = function (driver) {
    if (driver) this.driver = driver;
  };
}
const car = [
  new Car("Camry", "Toyota", 2010, 210, 2.5),
  new Car("Mustang", "Ford", 2015, 250, 5.0),
  new Car("Civic", "Honda", 2018, 180, 1.8),
];

console.log(car[0].producer);
console.log(car[0].year);
console.log(car[0].model);
console.log(car[0].maxSpeed);
console.log(car[0].engineVolume);
console.log(car[0].info);
console.log(car[0].drive);
console.log(car[0].increaseMaxSpeed(25));
console.log(car[0].changeYear(2025));
console.log(car[0].addDriver);
