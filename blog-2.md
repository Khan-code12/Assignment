Question-04:

The four pillars of OOP help manage large TypeScript projects by making code reusable, organized, and easier to maintain.

1. Encapsulation

It hides data inside a class and allows access only through methods.

class BankAccount {
    private balance: number = 0;

    deposit(amount: number) {
        this.balance += amount;
    }

    getBalance() {
        return this.balance;
    }
}

2. Inheritance

A class can reuse features of another class.

class Animal {
    move() {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking...");
    }
}

3. Polymorphism

 Same method behaves differently in different classes.

 class Shape {
    area(): number {
        return 0;
    }
}

class Circle extends Shape {
    area(): number {
        return 3.14 * 5 * 5;
    }
}

4. Abstraction

It hides complex logic and shows only important features.

abstract class Vehicle {
    abstract start(): void;
}

class Car extends Vehicle {
    start() {
        console.log("Car started");
    }
}
