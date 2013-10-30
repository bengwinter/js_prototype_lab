// ==========================================================================
// Prototype chains, (aka prototypical inheritence), for Constructor functions.
// ==========================================================================

// Why learn this?
// - Because we will need to be able to use, extend and debug Javascript libraries
// that use this pattern.
// - Because we *MAY* want to use this in our javascript. But, we probably should use 
// Object.create(...) from ES5.
// - Because may need to be able to debug Coffeescript, default in  Rails.

// Constructor functions are *just* functions that are used with the new operator.
// Many environments, including browsers, are optimized to use this kind of constructor.
// The *convention* is to uppercase the first name of a function that will be used as a constructor.

// A Person Constructor function.
var Person = function(name){
    // implicitly, when called with new Person('...')
    // create a new empty object and have 'this' point to it.
    // this = {};

    // set the new object's name property from the name argument
    this.name = name;

    // implicitly, when called with new Person('...')
    // point this new object's prototype, __proto__, to point to the function 
    // prototype, Person.prototype.
    // this.__proto__ = Person.prototype;

    // set the new object's say property to point to a function that 
    // will return a String.
    // This is how methods *CAN* be implemented in JS. 
    this.say = function(){ 
        // very inefficient, fix later!
        return "I am " + this.name;
    };

    // implicitly, when called with new Person('...')
    // Return the this pointer. You can change it to return something else.
    // return this;
}

// As confusing at this may sound, the prototype property is *not* the "real" prototype
// (__proto__) of the function. 
// The prototype property is aka "function prototype'. The prototype, __proto__, is the real prototype!!

// see they are *not* the same.
console.log(Person.__proto__ === Person.prototype); //=> false

// Look at Person.prototype in the console.
// should be an empty Object instance.

// Create the Person instance/object using the above Constructor function.
var tom = new Person('Thomas');

// Both tom's prototype, __proto__, and Person's function prototype point to the 
// same empty object. This was done when we created tom by invoking the 
/// Person Constructor function above.
console.log( Person.prototype === tom.__proto__); // true

// Look at Person.prototype in the console and tom.__proto__
// They both point an empty object.

// Now, we know what this means, right? Looking for a property/method on tom instance
// may traverse up the prototype chain to Person.prototype.

// Lets add a property and method to the Person function prototype.
// {name: 'Thomas', say: function(){...}} ---> {kind: 'person', goodbye: function(){...} } --> Object.prototype ---> null

Person.prototype.kind = 'person';
Person.prototype.goodbye = function() { return "See ya later, " + this.name; };

// In the new object we *also* have access to properties defined in Person.prototype
console.log(tom.name);  //=> 'Thomas'
// tom.name is owned by? 
tom.hasOwnProperty('name');

console.log(tom.say());  // call function/method of object tom
tom.hasOwnProperty('say');

console.log(tom.kind);  //=> person, property on the  Person.prototype
tom.hasOwnProperty('kind');

console.log(tom.goodbye());  // call function/method of the Person.prototype
tom.hasOwnProperty('kind');

// Look at tom in the chrome inspector
// see how tom is an instance of Person.
// it's __proto__ points to Person.prototype
// tom now has a kind property, 'person', and a goodby property, function.

// Create a new instance of Person with the name "Frederick"
fred = new Person("Frederick");
console.log(fred.name); // new name
console.log(fred.say());  // new function, but does the same thing!!
console.log(fred.kind);   // same kind property, from Person.prototype
console.log(fred.goodbye());  // same goodby property/function, from Person prototype

// Why is the say method bad?
// Because we create a brand new function for the say property everytime we call 
// the Person Constructor function. Very inefficient (slow and waste memory).

// Move the say function from inside the Constructor function to the Person.prototype.

// log all tom's properties
for (i in tom) {
    console.log(i);
}

// log all tom's own properties
for (i in tom) {
    if (tom.hasOwnProperty(i)) {
      console.log(i);
    }
}