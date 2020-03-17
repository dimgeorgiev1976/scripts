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
In function declaration, the definition of the function also gets hoisted, not only its declaration.  
Function bar() only its declaration gets hoisted, the definition of bar() is not hoisted  === only variable 'bar' gets hoisted not the implementation.
If the callback method uses "this" to refer to the object it belongs to, this can cause unexpected behavior.
If the first parameter is null, then this points to the global object, which is exactly what happens when you call a function
that is not a method of a specific object.
By private static members, we mean members that are:
• Shared by all the objects created with the same constructor function
• Not accessible outside the constructor
 Private properties - you need a function to act as a closure and wrap around the private members 
 
Let’s also say that “modern” are any other patterns that do not require you to think about classes. You should always strive for picking a modern pattern, unless the team is really uncomfortable if there are no classes involved.
The goal of implementing classical inheritance is to have objects created by one constructor function Child() get properties that come from another constructor Parent().  prototype property  has to point to an instance (an object) created with the parent constructor, not to the constructor itself . In other words, pay attention to the new operator

Using constructor functions looks like using classes in Java. They also enable you to add instance properties to this inside of the constructor body. However, adding methods to this is inefficient, because they end up being re-created with every instance and hat consumes more memory.That’s why reusable methods should be added to the prototype property  of the constructor 

The Default Pattern: the prototype property should point to an object, not a function, so it has to point to an instance (an object) created with the parent constructor(P), not to the constructor itself (C). In other words, pay attention to the new operator because you need it for this pattern to work.Later in your application when you use new Child() to create an object, it gets functionality from the Parent() instance via the prototype Another thing about using a generic inherit() function is that it doesn’t enable you to pass parameters to the child constructor, which the child then passes to the parent.



Rent-a-Constructor : This way you can only inherit properties added to this inside the parent constructor.
You don’t inherit members that were added to the prototype,, unlike the classical #1 pattern where they only get references.  The page object has an own tags property because using the rented constructor the new object got a copy of (not a reference to) the parent’s tags member. Changes to page.tags don’t affect the parent article because page.tags is a separate copy created during inheritance.

Borrowing Constructor Pattern: The drawback of this pattern is obviously that nothing from the prototype gets inherited

The Prototype Chain:  Using this pattern, kid got its own property name, but the say() method was never inherited, and an attempt to call it will result in an error.  The inheritance was a one-off action that copied parent’s own properties as child’s own properties and that was about it; no __proto__ links were kept

