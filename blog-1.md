Question-03:

Generics in TypeScript allow us to create reusable functions, classes, and components that can work with different data types while still maintaining type safety.

Without generics, we would need to write separate functions for different types or use any, which removes type checking.

Example without generics:
 function Example(value: any): any {
    return value;
}

Problem:
1)any loses type safety

Using Generics:

function identity<T>(value: T): T {
    return value;
}

Advantage:
T is a generic type parameter
The function automatically adapts to the type passed in
TypeScript remembers the exact type

console.log(identity<string>("Hello"));
console.log(identity<number>(42));

function call again and again
and Reuseable

Benefits of Generics:
1)Code Reusability
2)Type safety