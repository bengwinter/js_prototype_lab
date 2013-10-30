// create a new method on the Object prototype to allow inheritance
Object.prototype.my_inherit = function extend(parent_obj, child_obj) {
  // Beware!!! __proto__ not available in all javascript environments
  child_obj.__proto__.__proto__ = parent_obj;
};

// A Person Constructor function.
var Person = function(name){
    // implicit
    // this = {};

    // set the new object's name property from the name argument
    this.name = name;

    // people don't have tails, usually
    this.hasTail = false;

    // implicit
    // this.__proto__ = Person.prototype;

    // implicit
    // return this;
}

// create a say method for all instances of Person
Person.prototype.say = function(){
  return "I am " + this.name;
};

// create a kind method for all instances of Person
Person.prototype.kind = 'person';

// A Mammal Constructor function.
function Mammal (name, hasATail){
  this.name = name;
  this.hasTail = hasATail;
};

// create a kind method for all instances of Mammal
Mammal.prototype.kind = 'mammal';

// create a walk method for all instances of Mammal
Mammal.prototype.walk = function(){
 return "This " + this.name + " can walk";
}

// Create a mammal, with a tail
rocky_raccoon = some_mammal = new Mammal('rocky', true);

// Create a person named joe
joe = new Person('joey');

// joe will inherit rocky_raccoon's properties 
Object.my_inherit(rocky_raccoon, joe);

console.log(joe.name);
console.log(joe.say());
console.log(joe.kind);
console.log(joe.walk());
console.log(joe.hasTail);


// Create a person named alice
alice = new Person('Alice');
// alice inherit rocky_raccoon's properties 
Object.my_inherit(rocky_raccoon, alice);

console.log(alice.name);
console.log(alice.say());
console.log(joe.kind);
console.log(alice.walk());
console.log(alice.hasTail);

// Joe's properties haven't changed
console.log(joe.name);
console.log(joe.say());
console.log(joe.kind);
console.log(joe.walk());
console.log(joe.hasTail);
