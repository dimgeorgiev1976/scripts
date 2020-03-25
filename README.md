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

In the Prototypal inheritance pattern e child always starts as an empty object, which has no properties of its own but at
the same time has all the functionality of its parent by benefiting from the __proto__ link.

 Inheritance by Copying Properties : In this pattern, an object gets functionality from another object, simply by copying it
. With the shallow copy (because objects are passed by reference in JavaScript), if you change a property of the child, and this property happens to be an object, then you’ll be modifying the parent as well
Mix-ins :  Instead of copying from one object, you can copy from any number of objects and mix them all into a new object.

Functions in JavaScript are objects, and they come with some interesting methods of their own, such as call() and apply(). The only difference between the two is that one takes an array of parameters to be passed to the method being called, and the other one takes parameters one by one.
As you can see, even though twosay() was created as a global function, this didn’t point to the global object, but it pointed to object two, which was passed to bind(). Regardless of how you call twosay(), this will always be bound to two.
This bind() function accepts an object o and a method m, binds the two together, and
then returns another function. The returned function has access to o and m via a closure.
Therefore even after bind() returns, the inner function will have access to o and m, which
will always point to the original object and method

​​​​​​​ Singleton / Одиночка: 
In JavaScript, objects are never equal unless they are the same object, so even if you create an identical object with the exact same members, it won’t be the same as the first one 
The second time you use the same class to create a new object, you should get the same object that was created the first time. So you can say that every time you create an object using the object literal, you’re actually creating a singleton, and there’s no special syntax involved.
Using new : Functions in JavaScript are objects, so they can have properties.
The idea is that when you use new to create several objects using the same constructor, you should get only new pointers to the exact same object. 
​​​​​​​ Factory Method 
The purpose of the factory is to create objects. Offers a way for the customers of the factory to create objects without knowing the specific type (class) at compile time. Performs repeating operations when setting up similar objects. 
Sometimes the common parent is the same class that contains the factory method.
All you need to do is look for the constructor function that creates an object of the required type

​​​​​​​ Iterator / Итератор
In the iterator pattern, your object needs to provide a next() method

​​​​​​​ Decorator
In the decorator pattern, additional functionality can be added to an object dynamically, at runtime



