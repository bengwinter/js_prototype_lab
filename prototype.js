// ==========================================================================
// See
// http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/
// OR
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
// ==========================================================================

// ==========================================================================
// Prototype chains, (aka prototypical inheritence), for object literals.
// ==========================================================================

// -----------------------------------------------
// Create Object literals for alien, person and zack.
// -----------------------------------------------


// Remember creating Object literals will be creating instances of Object. 

// create an alien object
var alien = {
    kind: 'alien',
    hasTelepathy: true,
    e: 5,
    f: 6 
};

// and a person object
var person = {
    kind: 'person',
    c: 3,
    d: 4 
};

// and an object called 'zack'
var zack = {
    a: 1,
    b: 2 
};

// -----------------------------------------------
// Make zack an alien
// -----------------------------------------------
// Let's have an object 'zack' with its prototype chain looking like:
// {a:1, b:2} ---> {e:5, f:6, kind: 'alien', ...} ---> Object.prototype --> null
// 'a' and 'b' are zack's properties and 'e', 'f' and 'kind' are alien properties.

// assign alien as the prototype of zack
zack.__proto__ = alien

// zack is now linked to alien
// it 'inherits' the properties of alien
console.log(zack.kind); //=> 'alien'
console.log(zack.a);  //=> 1
console.log(zack.b);  //=> 2
console.log(zack.hasOwnProperty('a'));  // true
console.log(zack.hasOwnProperty('b'));  // true
console.log(zack.c);  //=> undefined
console.log(zack.d);  //=> undefined
console.log(zack.e);  //=> 5
console.log(zack.f);  //=> 6
console.log(zack.hasOwnProperty('e'));  // false
console.log(zack.hasOwnProperty('f'));  // false

zack.hasTelepathy ? console.log("Can read minds") : console.log("Can NOT read minds");
console.log(zack.hasTelepathy);  //=> true


// Look at zack in chrome inspector
// see how zack is an instance of Object.
// The constructor for zack is the function that creates Object instances.
// NOTE: Object literals are always instances of Object.
// it's prototype is undefined.
// it's __proto__ points to alien.
// And alien is also an instance of Object, 
console.log(zack.constructor); 
console.log(zack.prototype); // undefined
console.log(zack.__proto__);

// should be true
console.log(alien.isPrototypeOf(zack));
// shoud be the Object instance, i.e. object literal, alien.
console.log(Object.getPrototypeOf(zack));

// -----------------------------------------------
// Make zack a person
// -----------------------------------------------
// Let's have an object 'zack' with its prototype chain looking like:
// {a:1, b:2} ---> {c:3, d:4, kind: 'person'} ---> Object.prototype --> null
// 'a' and 'b' are zack's own properties and 'c', 'd' and 'kind' are person properties.

// assign person as the prototype of zack

// NOTE: prototype look ups are dynamic. They can change at anytime, even when at runtime!
zack.__proto__ = person
// and now zack is linked to person *not* alien.
console.log(zack.kind); //=> ‘person’
console.log(zack.a);  //=> 1
console.log(zack.b);  //=> 2
console.log(zack.c);  //=> 3
console.log(zack.d);  //=> 4
console.log(zack.e);  //=> undefined
console.log(zack.f);  //=> undefined
zack.hasTelepathy ? console.log("Can read minds") : console.log("Can NOT read minds");

// Look at zack in chrome inspector
// see how zack is an instance of Object
// it's __proto__ points to person
console.log(zack.constructor);
console.log(zack.prototype); // undefined
console.log(zack.__proto__);

// should be true
console.log(person.isPrototypeOf(zack));

// -----------------------------------------------
// Make zack a person and an alien
// -----------------------------------------------
// Let's have an object 'zack' with its prototype chain looking like:
// {a:1, b:2} ---> {c:3, d:4, kind: 'person'} --> {e:5, f:6, kind:'alien', ...} ---> Object.prototype --> null
// 'a' and 'b' are zack's own properties and 'c', 'd' and 'kind' are person properties and
// e, f kind are alien properties..

// assign alien as the prototype of person
person.__proto__ = alien;

// Now zack is linked to person and person is linked to alien
console.log(zack.kind); //=> ‘person’
console.log(zack.a);  //=> 1
console.log(zack.b);  //=> 2
console.log(zack.c);  //=> 3
console.log(zack.d);  //=> 4
console.log(zack.e);  //=> 5
console.log(zack.f);  //=> 6
zack.hasTelepathy ? console.log("Can read minds") : console.log("Can NOT read minds");

// should be true
console.log(person.isPrototypeOf(zack));
console.log(alien.isPrototypeOf(person));


// Look at zack in chrome inspector
// see how zack is an instance of Object
// it's __proto__ points to person and __proto_.__proto__ points to alien
console.log(zack.constructor);  // Object function, used to create instances of Object, which all object literals are!
console.log(zack.prototype);  // undefined
console.log(zack.__proto__);  // person object literal
console.log(zack.__proto__.__proto__);  // alien object literal

// -----------------------------------------------
// New/updated properties are assigned to the object, NOT the prototype's property.
// This new property 'shadows', or hides, the prototype's property.
// When the property is a method then 'shadowing' is aka method overriding.
// -----------------------------------------------

// zack's does *not* own property c
console(zack.hasOwnProperty('c'));
zack.c = 123; // update property c will add this property to zack object
// But *now* he does own a property c. And this property shadows/hides person's c property!
console(zack.hasOwnProperty('c'));

zack.name = 'zachary';  // new property 'name' will be added to zack object
console.log(zack.c) //=> 123
console.log(zack.name) //=> 'zachery'

// see how the prototype's property did *not* change!
console.log(person.c) //=> 3  

// get rid of all of zack's prototypes
zack.__proto__ = null;
console.log(zack.kind); //=> undefined, only defined in person and alien!
console.log(zack.name); //=> 'zachary'
console.log(zack.a);  //=> 1
console.log(zack.b);  //=> 2
console.log(zack.c);  //=> 123, defined on zack because we updated it above.
console.log(zack.d);  //=> undefined
console.log(zack.e);  //=> undefined
console.log(zack.f);  //=> undefined

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

// -----------------------------------------------
// when we create a new object using ths Person constructor function
// We have an object, tom, with its prototype chain looking like:
// {name: 'Thomas', say: function(){...}} ---> {} ---> null
// -----------------------------------------------
// Create an instance of Person with the Person constructor function.
var tom = new Person('Thomas');

// Lets add a property and method to the Person prototype.
// {name: 'Thomas', say: function(){...}} ---> {kind: 'person', goodbye: function(){...} } ---> null
Person.prototype.kind = 'person';
Person.prototype.goodbye = function(){ return "See ya later, " + this.name};

// the prototype of the new object points to person.prototype
console.log(tom.__proto__ == Person.prototype);  //=> true

// in the new object we have access to properties defined in Person.prototype
console.log(tom.name);  //=> 'Thomas'
console.log(tom.say());  // call function/method of object tom
console.log(tom.kind);  //=> person, property on the  Person.prototype
console.log(tom.goodbye());  // call function/method of the Person.prototype

// Look at tom in the chrome inspector
// see how tom is an instance of Person.
// The constructor for tom is the Person constructor function.
// it's prototype is undefined.
// it's __proto__ points to Person.prototype
console.log(tom.constructor);
console.log(tom.prototype); // undefined
console.log(tom.__proto__);



// Create a new instance of Person with the name "Frederick"
fred = new Person("Frederick");
console.log(fred.name); 
console.log(fred.say());
console.log(fred.kind); 
console.log(fred.goodbye());


// Why is the say method bad?


// ==========================================================================
// Prototype chains, (aka prototypical inheritence), for Object.create
// This is available in ES5
// ==========================================================================

// lets reset the person prototype
person.__proto__ = null;

var sue = Object.create(person, {name: {value: "Susan"}});
console.log(sue.kind); //=> undefined, only defined in person and alien!
console.log(sue.name); //=> 'Susan'
console.log(sue.a);  //=> undefined
console.log(sue.b);  //=> undefined
console.log(sue.c);  //=> 3
console.log(sue.d);  //=> 4
console.log(sue.e);  //=> undefined
console.log(sue.f);  //=> undefined

// Look at sue in chrome inspector
// see how sue is an instance of Object
// it's __proto__ points to person.
console.log(sue.constructor); // undefined
console.log(sue.prototype);   // undefined
console.log(sue.__proto__);   // undefined

