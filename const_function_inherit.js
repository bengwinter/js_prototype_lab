Object.my_class_inherit = function (C, parent_obj) {
  // create a temp Constructor function
  var F = function () {}; 

  // temp constructor 'function prototype' points to parent_obj 
  F.prototype = parent_obj;
  
  // create a new temp instance and set the child's 'function prototype'
  // to point to it.
  C.prototype = new F(); 

  // Can't name this 'super' it's a reserved keyword in Javascript.
  C.prototype.uber = parent_obj;

  // constructor pointer is rarely used. But, when we introspect an object,
  // in chrome inspector, it's less confusing to point to the correct constructor.    
  C.prototype.constructor = C;
}

// A Person Constructor function.
var Person = function(name){
    this.name = name;
    this.hasTail = false;
}

// A Mammal Constructor function.
function Mammal (name, hasATail){
  this.name = name;
  this.hasTail = hasATail;
};
Mammal.prototype.kind = 'mammal';
Mammal.prototype.walk = function(){
 return "This " + this.name + " can walk";
}
rocky_raccoon = new Mammal('Rocky', true);

Object.my_class_inherit(Person, rocky_raccoon);

// Need to add these methods after my_class_inherit function
Person.prototype.say = function(){
  return "I am " + this.name;
};

// create a kind method for all instances of Person
Person.prototype.kind = 'person';

// Create a person named joe
joe = new Person('joey');
console.log(joe.say());
console.log(joe.walk());
console.log(joe.kind);
console.log(joe.hasTail);
console.log(joe.uber.kind); 
console.log(joe.uber.hasTail);

alice = new Person('Alice');
console.log(alice.name);
console.log(alice.say());
console.log(alice.walk());
console.log(joe.kind);
console.log(alice.hasTail);
console.log(alice.uber.kind);
console.log(alice.uber.hasTail);
