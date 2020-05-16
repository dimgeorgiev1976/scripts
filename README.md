# scripts
functions and all other identifiers—primitives and objects.

# javasbript_the_good_parts

JavaScript has a classfree object system in which objects inherit properties directly from other objects.
All of the top-level variables
of all compilation units are tossed together in a common namespace called the global
object 
Numbers have methods . JavaScript has a Math object that contains a set of methods that act on numbers.
For example, the Math.floor(number) method can be used to convert a number into an integer.
​​​​​​​ Grammar 
The \u convention allows for specifying character code points numerically
"A" === "\u0041"

'c' + 'a' + 't' === 'cat' is true
The sequence of execution can be altered by the conditional statements (if and switch),
by the looping statements (while, for, and do),
by the disruptive statements (break, return, and throw), 
and by function invocation.

blocks in JavaScript do not create a new scope, so variables should be defined at the
top of the function, not in blocks.

The do statement is like the while statement except that the expression is tested after
the block is executed instead of before. 
The throw statement raises an exception. If the throw statement is in a try block, then
control goes to the catch clause. Otherwise, the function invocation is abandoned,
and control goes to the catch clause of the try in the calling function.

The expression is usually an object literal containing a name property and a message
property. The catcher of the exception can use that information to determine what to
do.
An expression statement can either assign values to one or more variables or members, invoke a method, delete a property from an object.
Table 2-1. Operator precedence
. [] ( ) Refinement and invocation
delete new typeof + - ! Unary operators
* / % Multiplication, division, modulo
+ - Addition/concatenation, subtraction
>= <= > < Inequality
=== !== Equality
&& Logical and
|| Logical or
?: Ternary
The && operator produces the value of its first operand if the first operand is falsy.
Otherwise, it produces the value of the second operand.
The || operator produces the value of its first operand if the first operand is truthy.
Otherwise, it produces the value of the second operand.

The values produced by typeof are 'number', 'string', 'boolean', 'undefined',
'function', and 'object'.
Invocation causes the execution of a function value. The invocation operator is a pair of parentheses that follow the function value. The parentheses can contain arguments that will be delivered to the function.

# Literals
Object literals are a convenient notation for specifying new objects.
The names of the properties of the object must be
known at compile time. The values of the properties are expressions

A function literal defines a function value. It can have an optional name that it can
use to call itself recursively. It can specify a list of parameters that will act as variables initialized by the invocation arguments. The body of the function includes variable definitions and statements

Numbers, strings, and booleans are object-like in that they have methods, 
but they are immutable. Objects in JavaScript are mutable keyed collections /hashes/.

JavaScript includes a prototype linkage feature that allows one object to inherit the
properties of another.

# Object Literals

Object literals provide a very convenient notation for creating new object values.
An object literal is a pair of curly braces surrounding zero or more name/value
pairs. An object literal can appear anywhere an expression can appear:


# Retrieval

Values can be retrieved from an object by wrapping a string expression in a [ ] suffix. If the string expression is a constant, and if it is a legal JavaScript name and not a
reserved word, then the . notation can be used instead

# Reference

Objects are passed around by reference. They are never copied.

# Prototype

Every object is linked to a prototype object from which it can inherit properties.All
objects created from object literals are linked to Object.prototype, an object that
comes standard with JavaScript.When you make a new object, youcan select the object that should be its prototype.

The prototype link has no effect on updating. When we make changes to an object,
the object’s prototype is not touched. The prototype link is used only in retrieval.
If the desired property exists nowhere in the prototype chain,
then the result is the undefined value. This is called delegation.

# Reflection

Use the hasOwnProperty method, which returns true if the object has a particular property. 
The hasOwnProperty method does not look at the prototype chain:
flight.hasOwnProperty('number') // true
flight.hasOwnProperty('constructor') // false





# JavaScript_Patterns_(2010)
literals such as object,array, and regular expression literals

objects in JavaScript = key - value /*  hash tables of key - value pairs */

The values can be properties = primitives /* number, string, boolean, null, and undefined values */ or other objects; 
The values can also be functions in which case they are called methods.
methods, should go to the prototype.


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
 The sale “knows” about the price of the item and can return it by calling the sale.getPrice() method. 
 
 Each decorator actually inherits the object enhanced so far after the previous decorator. 
 
/*...................Implementation Using a List..................*/
If you want to have more methods that can be
decorated, then the part of going through the list of decorators should be repeated by
each additional method.

​​​​​​​ Strategy
Depending on the concrete form and the data to be validated, the clients of your validator may choose different types of checks. Your validator picks the best strategy to handle the task and delegates the concrete data checks to the appropriate algorithm. For the validator to know what is the best strategy to use in this concrete example, you need to configure the validator first and set the rules of what you consider to be valid and acceptable. The available algorithms for the checks
are objects with a predefined interface—they provide a validate() method and a oneline help information to be used in error messages
​​​​​​​ Facade
Sometimes two or more methods may commonly be called together. In such cases it makes sense to create another method
that wraps the repeating method calls. 
stopPropagation() : Traps the event and doesn’t let it bubble up to the parent nodes 
preventDefault() : Doesn’t let the browser do the default action (for example, following a link or submitting a form)
 So instead of duplicating the two method calls all over the application, you can create a façade method that calls
both of them.
You can start with thinking about the new object’s API and then proceed to create a façade in front of the old object that follows the new API. This way, when you get to fully replacing the old object, you’ll have less client code to modify because any recent client code will already use the new API.

​​​​​​​ Proxy
The proxy serves as a guardian of the object (also called a “real subject”) and tries to have the real subject do as little work as possible.The proxy receives the initialization request but never passes it on until it’s clear that the real subject is actually used. Illustrates the scenario where the client makes an initialization request and the proxy responds that all is good but doesn’t actually pass on the message until it’s obvious that the client needs some work done by the subject.
In web applications, one of the most expensive operations you can do is a network request, so it makes sense to combine HTTP requests as much as possible
videos: Responsible for info areas expand/collapse (method videos.getInfo()) and playing videos (method videos.getPlayer())
http : Responsible for communication with the server via the method http.makeRequest() 
When there’s no proxy, videos.getInfo() will call http.makeRequest() once for every video. When we add a proxy, it will become a new actor called proxy and will be sitting between videos and http and delegating the calls to makeRequest(), combining them when possible. which means the info section has already been expanded, and we can then call getPlayer().

Introducing the proxy provides the ability to combine multiple web service requests into one with only a simple change to the original code.
The proxy can go further in protecting the real subject http by caching the results of previous requests into a new cache property 
​​​​​​​ Observer
The main motivation behind this pattern is to promote loose coupling. The publisher notifies (calls) all the subscribers when an important event occurs and may often pass a message in the form of an event object.The notification means calling a method of the subscriber object. Therefore, when subscribing, the subscriber provides one of its methods to paper’s subscribe() method.
In the mediator pattern the mediator object knows about all other participating objects and calls their methods. The game object in the observer pattern will not do that; instead it will leave it to the objects to subscribe to interesting events. 
For example, the score board will subscribe to game’s “scorechange” event.

DOM Access
DOM is usually implemented separately from the JavaScript engine. From a browser’s perspective, it makes sense to take this approach,because a JavaScript application may not need DOM at all.

It will also help if you add id="" attributes to elements you’ll be accessing often, because document.getElementById(myid) is the easiest and fastest way to find a node.

​​​​​​​ Event delegation 
The drawback of the event delegation is the slightly more code to filter out the events that happen in the container But the benefits— performance and cleaner code—outweigh the drawbacks significantly, so it’s a highly recommended pattern.

For example YUI3 has the method Y.delegate(), which enables you to specify a CSS selector to match the wrapper and another selector to match the nodes you’re interested in. This is convenient because your callback event handler function will actually never be called when the event happens outside the nodes you care about









