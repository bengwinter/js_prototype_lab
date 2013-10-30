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


zack.__proto__ = person;
console.log(zack.a);
console.log(zack.b);
console.log(zack.c);
debugger;
console.log(zack.d);
console.log(zack.e);
console.log(zack.f);

zack.hasTelepathy ? console.log("Can read minds") : console.log("Can NOT read minds");

person.__proto__ = alien;

console.log(zack.a);
console.log(zack.b);
console.log(zack.c);
debugger;
console.log(zack.d);
console.log(zack.e);
console.log(zack.f);

zack.hasTelepathy ? console.log("Can read minds") : console.log("Can NOT read minds");