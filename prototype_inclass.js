var alien = {
	kind: 'alien',
	hasTelepathy: true,
	e: 5,
	f: 6
};

var person = {
	kind: 'person',
	c: 3,
	d: 4
};

var zack = {
	a: 1,
	b: 2
};


zack.__proto__ = alien;

console.log(zack.a);
console.log(zack.b);
console.log(zack.c);
debugger;
console.log(zack.d);
console.log(zack.e);
console.log(zack.f);
zack.hasTelepathy ? console.log("Can read minds") : console.log("Can NOT read minds");

// make zack a person, not an alien
zack.__proto__ = person;
console.log(zack.a);
console.log(zack.b);
console.log(zack.c);
console.log(zack.d);
console.log(zack.e);
console.log(zack.f);
zack.hasTelepathy ? console.log("Can read minds") : console.log("Can NOT read minds");


// make zack a person AND an alien, like spock
person.__proto__ = alien;
console.log(zack.a);
console.log(zack.b);
console.log(zack.c);
console.log(zack.d);
console.log(zack.e);
console.log(zack.f);
zack.hasTelepathy ? console.log("Can read minds") : console.log("Can NOT read minds");

// override/shadow properties.
console.log(zack.hasOwnProperty('c'));
zack.c = 123;
console.log(zack.hasOwnProperty('c'));
console.log(zack.c);
console.log(zack.a);
console.log(zack.b);
console.log(zack.d);
console.log(zack.e);
console.log(zack.f);

// create an alien, yoda

// create a alien and a person, spock.


person.say = function() { 
	return "Hello from person";
};
console.log(zack.say());

// ==========================================================================
// Prototype chains, (aka prototypical inheritence), for Constructor functions.
// ==========================================================================

// Constructor functions are *just* functions that are used with the new operator.
// Many environments, including browsers, are optimized to use this kind of constructor.
// The *convention* is to camelcase a function that will be used as a constructor.

// A Person Constructor function.
var Person = function(name){
    // implicitly, when called with new Person('...')
    // create an empty object and assign it to this pointer.
    // this = {};

    this.name = name;

    // implicitly, when called with new Person('...')
    // point to the function, Person, prototype.
    // this.__proto__ = Person.prototype;

    this.say = function(){ 
        return "I am " + this.name;
    };

    // implicitly, when called with new Person('...')
    // returns this pointer. You can change it to return something else.
    // return this;
}

// As confusing at this may sound, prototype property is *not* the "real" prototype
// (__proto__) of the function. 
console.log(Person.__proto__ === Person.prototype); //=> false

tom = new Person('Thomas');
console.log(tom.name);
console.log(tom.say());

tom.say = function() { return "Say something " + this.name; };
console.log(tom.say());

console.log("kdfjdkfjdfkdj");

