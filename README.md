# scripts
functions and all other identifiers—primitives and objects.

literals such as object,array, and regular expression literals

objects in JavaScript = key - value /*  hash tables of key - value pairs */

The values can be properties = primitives /* number, string, boolean, null, and undefined values */ or other objects; 
The values can also be functions in which case they are called methods.
methods, should go to the prototype.

Many of the properties of the built-in native objects are also mutable.
Objects are simply mutable hashes

 Object() constructor accepts a parameter  depending on the value passed, it may decide to delegate the object creation to another built-in constructor and return a different object 

constructors are still just functions but invoked with new

primitives are not objects but, the primitive is temporarily converted to an object behind the scenes and behaves as if it
were an object.

Functions are objects that have their own properties and methods.
Functions provide scope!
When you think of a function in JavaScript, think
of an object, with the only special feature that this object is invokable, meaning it can
be executed

Function declarations can only appear in “program code,” meaning inside of the bodies
of other functions or in the global space.  The name property is also used to call the same function recursively from 
within itself
function expressions is highlight that functions are objects like all other objects
a function declaration, the definition of the function also gets hoisted, not only its declaration.  
Function bar() only its declaration gets hoisted, the definition of bar() is not hoisted  === only variable 'bar' gets hoisted not the implementation.
If the callback method uses "this" to refer to the object it belongs to, this can cause unexpected behavior.
 
