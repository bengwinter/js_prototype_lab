js_prototype_lab
================

Lab for javascript prototypical inheritance and object creation patterns.

### References
  * [Plain English Guide to Javascript Prototypes] (http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/)
  * [Inheritance and the prototype chain] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  * [New Way to Create Objects] (http://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html)
  * [ECMAScript] (http://en.wikipedia.org/wiki/ECMAScript)
  * [Browser compatability with ES5] (http://kangax.github.io/es5-compat-table/)

### Files.
  * const_function.js - Creating objects with a Constructor function. 
  * const_function_inherit.js - Inheritance with Constructor
    function. Injects a temp function instance btw the object created
    and the function prototype this new object.
  * const_function_proto_inherit.js - Inheritance with Constructor
    function. Uses the prototype, __proto__, to link super and sub
    classes. *Can't use this in some environment due to the lack of
    the __proto__.*
  * const_function_inherit2.js - Inheritance with Constructor
    function. Inherit's one Constructor function from another. *Needs debugging*
