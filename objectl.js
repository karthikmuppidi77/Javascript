let student1={
    name1: "karthik",
    grade:10,
    marks: 9.2,};
let student2={
    name2:"aswin kumar",
    grade:10,
    marks:9.3,
}
 let student3={
    name3:"venkatreddy",
    grade:10,
    marks:9.3,
 }
//let student4=Object.assign({},student1)
//student4.name="dhoni"
//console.log(student4);
//console.log(student1);
 

let student4={...student1,student2,student3}
student4.name3="karthik"
console.log(student4);








 

 
 

 

