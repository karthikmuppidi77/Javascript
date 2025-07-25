const cities=["srikakulam","vizianagaram","visakhapatnam","hyderabad"]
const city=cities[1];
console.log(city);
const len=cities.length;
console.log(len);
const add =["ranasthalam"];
console.log(add);
console.log(cities);
cities[0]="palasa"
console.log(cities);
const person = {firstName:"karthik", lastName:"dhoni", age:26};
const fName=person.firstName
console.log(fName);
const sports=["basketball",1]

//slice practice
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango","grapes","dates"];
const citrus = fruits.slice(2,5)
console.log(citrus);
console.log(fruits);


//splice practice
const places=["hyderabad","mysore","coimbature","shimla","srinagar"]
// it will modify the original Array not assaign to another varaiable
// ex:const travel=places.splice(1,0,"Amaravathi");


//places.splice(1,0,"Amaravathi");
//console.log(places);

//to delete the coimbature place

console.log(places);
places.splice(2,1)
console.log(places);

//Multidimension Array
 
const myremarks=[
    ["school","karthik",92],
    ["basketball","players",5],
    ["languages_states","telugu_speak",2],
];
console.log(myremarks[0][2]);
console.log(myremarks[2][2]);
    


 const tictactoe=[
    ["x",null,null],
    [null,0,null],
    [0,null,"x"],
 ]
 console.log(tictactoe[2][2]);
 console.log(tictactoe[0][2]);

//deep copy -shallow copy

const fruit=["mango","apple","orange"];
console.log(fruit);
const health_diet=fruit;
health_diet.push("dates")
console.log(fruit);
console.log(health_diet);
//slice
const mobiles=["samsung","oneplus","poco","iphone15","iphone 16"]
const cell=mobiles.slice(1,4)
console.log(cell);
 
//splice

const cars=["brezza","fortuner","innovo","scorpio"]
const car =cars.splice(1,2);
console.log(cars);
  
//toString 

const ece=["fan","bulbs","wiring","ac",3]
ece.toString()
console.log(ece);