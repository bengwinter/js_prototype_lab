Object.my_class_inherit = function (C, P) {
  // create a temp Constructor function
  var F = function () {}; 

  // set it's prototype to equal the parent's prototype
  F.prototype = P.prototype; 

  // create a new temp instance and set the child's prototype
  // to point to it.
  C.prototype = new F(); 

  // Create a new property on Client that will allow you to invoke
  // Parent methods.
  C.uber = P.prototype; 

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

Object.my_class_inherit(Person, Mammal);

// This must be after the my_class_inherit, otherwise it'll be lost!
Person.prototype.say = function(){
  return "I am " + this.name;
};
Person.prototype.kind = 'person'

Mammal.prototype.kind = 'mammal';
Mammal.prototype.walk = function(){
 return "This " + this.name + " can walk";
}

// Create a person named joe
joe = new Person('joey');
console.log(joe.say());
console.log(joe.walk());
console.log(joe.kind);
console.log(joe.hasTail);
// broke???
// console.log(joe.uber.kind);
// console.log(joe.uber.hasTail);

alice = new Person('Alice');
console.log(alice.name);
console.log(alice.say());
console.log(alice.walk());
console.log(joe.kind);
console.log(alice.hasTail);
// broke???
// console.log(alice.uber.kind);
//console.log(alice.uber.hasTail);
