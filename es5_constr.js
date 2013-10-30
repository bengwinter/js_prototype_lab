// ==========================================================================
// Prototype chains, (aka prototypical inheritence), for Object.create
// This is available in ES5
// ==========================================================================

// lets reset the person prototype
// and a person object
var person = {
    kind: 'person',
};

var sue = Object.create(person, {name: {value: "Susan"}, age: {value: 34} });
console.log(sue.kind); // person
console.log(sue.name); // 'Susan'
console.log(sue.age); // 34

// Look at sue in chrome inspector
// see how sue is an instance of Object
// it's __proto__ points to person.
console.log(sue.__proto__);   // person "defined above"
console.log(sue.hasOwnProperty('name')); // true
console.log(sue.hasOwnProperty('age')); // true
console.log(sue.hasOwnProperty('kind')); // false

var bob  = Object.create(person, {name: {value: "Bobby"}, age: {value: 26} });
console.log(bob.kind); // person
console.log(bob.name); // 'Bobby'
console.log(bob.age); // 26