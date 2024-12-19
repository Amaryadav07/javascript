let text="this is string"   // string
let arr=["amar",30,"bhopal"]  // array


// object  is key value pair
//key:value

let student={

    name:"amar",
    age:30,
    city:"bhopal",
    welcome: function(){
        console.log(`welcome to ${this.name} home`);
        fruits:["apple","mango"]
      
        
        
    }

}
console.log(student.fruits[1]);
// console.log(student.age); // access age 

student.email="amarnath2893@gmail.com" // new added data to exsisting object
student.age=35 // it will override with previous data // update
// delete student.name;// delete the data 
console.log(student);
student.welcome()

