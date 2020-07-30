1.
const Mammal = {
  eat: function(){alert(`${this.name} is eating`)}
}

const Human = {
  run: function() {alert(`${this.name} is running`)}
}

function Man(name, age){
  this.name = name;
  this.age = age;
}
function spawn (constructor, ...args) {
  let obj = {};
  obj.__proto__ = constructor.prototype;
  constructor.call(obj, ...args);
  return obj;
}
Man.prototype = Human;
Human.__proto__ = Mammal;

const a1 = spawn(Man, 'Alex', 29);

2.
webdev.__proto__ = architect;
architect.__proto__ = fullstack;
fullstack.__proto__ = junior;

3.
Object.prototype.toString = function () {
  let string = "";
  for (const [key, value] of Object.entries(this)) {
    string += `${key}: ${value},`
  }
  string = string.slice(0, -1);
  return string;
}

4.
Function.prototype.delay = function(ms) {
  let that = this;
  return function(...args) {
    setTimeout(()=>that.apply(this, args), ms);
  }
};

5.
const starter = (place) => ({
  start: (place) => alert(`Starting from ${place}`),
});

const mover = (place) => ({
  move: (place) => alert(`Moving to ${place}`),
});

const honker = (sound) => ({
  honk: (sound) => alert(`Honking ${sound}`),
});

const shooter = (thing) => ({
  shoot: (thing) => alert(`Shooting with ${thing}`),
});

const Vehicle = (type) => {
  const vehicle = {
    type,
  };
  return Object.assign(type, starter(), mover());
}

const tram = Vehicle('tram');

tram.start('Railway Station');
tram.move('Central Square');

const Car = (type) => {
  const car = {
    type,
  };
  return Object.assign(type, starter(), mover(), honker());
}

const ford = Car('ford');

ford.start('Railway Station');
ford.move('Central Square');
ford.honk('zzzzzzzz!');

const Tank = (type) => {
  const tank = {
    type,
  };
  return Object.assign(type, starter(), mover(), shooter());
}

const t34 = Tank('t34');

t34.start('Railway Station');
t34.move('Central Square');
t34.shoot('sweets');

const Bicycle = (type) => {
  const bicycle = {
    type,
  };
  return Object.assign(type, mover());
}

const stork = Bicycle('stork');

stork.move('Central Square');
