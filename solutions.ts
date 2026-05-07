// problem-01
function filterEvenNumbers(item: number[]) :number[]{
   return item.filter(num=>num%2===0);
}
const Even=filterEvenNumbers([1,2,3,4,5,6]);
console.log(Even);

// Problem =02

function reverseString(Str: string):string
{
    let Rev = "";
    for(let i=Str.length-1;i>=0;i--){
        Rev+=Str[i];
    }
    
    
    return Rev;
    
}
const res=reverseString("typescript");
console.log(`"${res}";`);

// PROBLEM -03

type StringOrNumber=string | number;

function checkType(num: StringOrNumber):StringOrNumber
{
    if(typeof num ==='number'){
        return `"Number" ;`;
    }else{
        return `"String" ;`;
    }
}

const ans=checkType("Hello");
console.log(ans);

const res1=checkType(42);
console.log(res1);

// problem -04

function getProperty<T, K extends keyof T>(obj: T, key: K) :T[K]{
    return obj[key];
}


const user = { id: 1, name: "John Doe", age: 21 };
  console.log(getProperty(user, "name"));


// Problem -05

interface Book{
    title:string;
    author:string;
    publishedYear:number;
}

function toggleReadStatus(book: Book) {
    return {
        ...book,
        isRead: true
    };
}
const myBook:Book= { 
    title: "TypeScript Guide",
     author: "Jane Doe", 
    publishedYear: 2024 
};

console.log(toggleReadStatus(myBook));


// problem -06
class Person{
    name:string;
    age: number;
    constructor(name: string,age:number){
        this.name=name;
        this.age=age;
    }
}
class Student extends Person{
    Grade:string;
    constructor(name: string,age:number,Grade:string){
        super(name,age);
        this.Grade=Grade;
    }
    getDetails(){
        console.log(`"Name: ${this.name}, Age: ${this.age}, Grade: ${this.Grade}"`);
    }
        
}

const student = new Student("Alice", 20, "A");
student.getDetails();

// problem -07

function getIntersection(x: number[],y: number[]) :number[]
{
     return x.filter(num => y.includes(num));
}
 const res3=getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
 console.log(res3);