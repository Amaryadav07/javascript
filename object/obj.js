let text="this is string"   // string
let arr=["amar",30,"bhopal"]  // array


// object  is key value pair
//key:value

let student={

    name:"amar",
    "last name":"yadav",
    age:30,
    city:"bhopal",
    welcome: function(){
        console.log(`welcome to ${this.name} home`);
       },
    fruits:["apple","mango"]
    
}
console.log(student.fruits[0]);
// console.log(student.age); // access age 

// student.email="amarnath2893@gmail.com" // new added data to exsisting object
// student.age=35 // it will override with previous data // update
// delete student.name;// delete the data 
console.log(student["name"]);
// console.log(student.lastname);
console.log(student["last name"]);
console.log(typeof student.age);





// student.welcome()

