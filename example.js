console.log('this is my fisrt coding practice')
console.log('this is the highest record number in my life')


var a=10
let b=20
const c= 30

console.log(a,b,c)
// primitive data type
let name = "rakib";
let age = 20;
let isactive= true;
let x;
let y = null;
console.log(name)
console.log(age)
console.log(isactive)
console.log(x)
console.log(y)

// Non primitive data type 
let person ={
    name : 'fahim',
    age : 20
}
console.log(person)

let  colors = ['red','blue','green']
console.log(colors)

// arithmetic opeations 
 a= 10
 b=5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//assignment operator 
x=10
x-= 5
console.log(x)

// comparison operators

console.log(5==6)

console.log(5 != 4)
console.log(5 === '5')

console.log(5<4)
console.log(5 <= 5)

// logical operator 
a = false 
b= true
console.log(a && b) // and
console.log(a || b) // or
console.log(!a)


// if-else 

a = 10 
b= 20
if(a>b){
    console.log('A is bigger')
}else {
    console.log('B is bigger')
}

// switch case 

 x = 0
switch(x) {
    case 0:
        console.log('OFF')
        break
    case 1:
        console.log('ON')
        break
    default:
        console.log("No value found")
}


// LOOP
for(let i=0; i<5; i++) {
    console.log('Hello world')
}
x=17
for(let i=1;i<=10;i++){
    console.log(x , 'x', i ,'=',x*i)
}

i=0
while(i < 10) {

    console.log(i)
    i++
}

i = 0
do {
   console.log(i)
   i++
}while (i<5)

colors = ['red', 'blue' , 'green']
console.log(colors[0])

// for in loop  
for (let index in colors) {
    console.log(colors[index])
}


function greetings( user = "Guest") {
    console.log('Have a nice day! ' +  user);
}

greetings("Messi");
greetings("Ronaldo");

// make a function to convert f to c 
// c/5 = (f-32)/9

function converttocelcius(f) {
    let c = 5 * ((f - 32) / 9);
    return c;
}
console.log(converttocelcius(40));


// arrow function 
const add = (a,b)  => {
    return a+b;
}

const multiple = (a,b) => a*b;
console.log(add(5,6));

// object 

 person= {
    firstName:"Rakib",
    lastName:"Hossain",
    email: "sseyam45@gmail.com",
    gender: "Male",
    character : "good",
    age: 26,
    isdeveloper: true


}
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.isdeveloper)
// update
person.age = 28
person.email = "rakib@gmail.com"
person.id = 12234
console.log(person)


let personkeys = Object.keys(person)
console.log(personkeys)

let perosnvalues = Object.values(person)
console.log(perosnvalues)


let personentries = Object.entries(person)
console.log (personentries)


person1= {
    firstName:"Sakib",
    lastName:"Hossain",
    email: "sakib45@gmail.com",
    gender: "Male",
    character : "good",
    age: 26,
    isdeveloper: true


}

for (let entrie of  Object.entries(person1)){
    console.log(entrie[0], ' ' , entrie[1])
}


// object convert to json
let personjson = JSON.stringify(person1)
console.log(personjson)

// json to object
let personresponse = '{"firstName":"Sakib","lastName":"Hossain","email":"sakib45@gmail.com","gender":"Male","character":"good","age":26,"isdeveloper":true}'
let personobject = JSON.parse(personresponse)
console.log(personobject)


// array 
let names = ['rakib', 'sakib', 'fahim', 'usain', 25 , 36 , true]
console.log(names)
console.log(names[0])
console.log(names[5])
console.log(names.length)
names.push('messi')
console.log(names)
names.pop()
console.log(names)

names[0] = 'abid hasan'
console.log(names)

console.log(names.includes("sakib"))
console.log(names.includes("zakir"))


console.log(names.indexOf("fahim"))


names = ['rakib', 'sakib', 'fahim', 'usain', 25 , 36 , true]

names.forEach((a) => console.log(a, "is my name")); // array loop


let numbers = [1,2,3,4,5,6,7,8]

let evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers)

let oddNumbers = numbers.filter((num) => num % 2 !== 0)
console.log(oddNumbers)

let squaredNumbers = numbers.map((num) => num * num)
console.log(squaredNumbers)

let sortedvalues = numbers.sort((a, b) => a - b)
console.log(sortedvalues)


 names = ['rakib', 'sakib', 'fahim', 'usain']
let newnames = []
console.log(names.length)

for (let i= 0 ; i< names.length; i++) {
    if (names[i] == 'Fahim'){
        newnames.push(names[i])
    }
} 
console.log(newnames)

newnames = names.filter((name) => name === 'fahim')
console.log(newnames)

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi']
fruits.sort()
console.log(fruits)


// string 

let message = "Hello, JavaScript"
console.log(message.length)
console.log(message.toUpperCase())
console.log(message.toLowerCase())

console.log(message.indexOf('JavaScript'))
console.log(message.includes('fahim'))

const newmessage1 = message.replace('JavaScript','Python')
console.log(newmessage1)

let words = message.split(',')
console.log(words)

fruits1 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log(`Hello, ${fruits1[0]} and ${fruits1[2]}`);


// DATE AND TIME 
let currentdate = new Date('1995 , 4 , 15')
console.log(currentdate)
console.log(currentdate.getFullYear())
console.log(currentdate.getDate())
console.log(currentdate.getDay())
console.log(currentdate.getMonth())
console.log(currentdate.getMinutes())

console.log(currentdate.toDateString())


// MATH

console.log(Math.PI)
console.log(Math.abs(10))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.7))
console.log(Math.round(4.9))

console.log(Math.max(120, 46))
console.log(Math.min(14, 25))
console.log(Math.random())

console.log(Math.floor(Math.random() * 6)+1)
console.log(Math.pow(2,3))
console.log(Math.sqrt(16))
console.log(Math.tan(30))

// number 

let number1 = Number(22)
console.log(typeof number1)

console.log(parseInt('1012345'))

let value = "1300"
let convertedvalue = Number(value)
console.log(convertedvalue + 100)

value1 = "130.342"
let convertedvalue1 = parseFloat(value1)
console.log(convertedvalue1 + 100)



// spread operator

const arr1 = [1, 2, 3, 4]
const arr2 = [...arr1, 5, 6 ,7]
console.log(arr2)

const arr3 = [...arr2, 10]
console.log(arr3)

const obj1 = { name: 'Rakib' , age : 26}
const obj2 = {...obj1 , email:'nazifakawser@gmail.com'}
console.log(obj2)

// rest operator 

function sum(...numbers) {
    console.log(numbers)
    const sum = numbers.reduce((acc, curr) => acc + curr, 0)
    return sum
}

const result = sum(1,2,3,4,5)
console.log(result)


// ES6 array de-structuring

const total = [10 , 40, 50]
const [num1 , num2, num3] = total ;
console.log(num1 , num2, num3);

const sum1 = (num1 , num2) => num1 + num2 
console.log(sum1(10 , 40))

// dynamic function 

function createMulitplier(factor) {
    return function(number) {
        return number * factor;
    }
}

const double = createMulitplier(2)
console.log(double(5))

const tripple = createMulitplier(3)
console.log(tripple(10))

// object method 
const car = {
    brand : "tesla" , 
    model : "Model 50",
    getinfo() {
        return `Brand: ${this.brand}, Model: ${this.model}`
    }
}
console.log(car.getinfo())




// decision making 

let age1 = 25 

if (age < 18) {
    console.log("you are a minor")
}
else {
    console.log("you are an adult")
}


// ternary operator 
const result1 = age1 < 18 ? "You are a minor." : "You are an adult"
console.log(result1)


// ES6 Map , ES6 set 

// map : it since like as object : key and value pair : object type data structure 
const myMap = new Map()
myMap.set('name', 'Rakib')
myMap.set('age', 26)
console.log(myMap.get('name'))
console.log(myMap.get('age'))
console.log(myMap)

// set : it is a collection of unique values : set deoes not duplicate values : array type data structure
 

const numberset = new Set([1, 2, 3, 4, 5])
numberset.add(7)
console.log(numberset)
console.log(numberset.has(29))

for(let num of numberset) {
    console.log(num)
}

const numbersarray = [...numberset]
console.log(numbersarray)


// hoisting , nodejs description 




 























