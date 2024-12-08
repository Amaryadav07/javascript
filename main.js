function abc() {
    
// let a = parseInt(window.prompt("enter your number-1"));
// let b =parseInt(window.prompt("enter your number-2"));

// alert(a+b);

// let a= confirm("enter your feedback")
// if (a==true) {
//     alert("thank you for your feedback")
// }
// else{
//     alert("we will record your feedback")
// }

// multiple if and else if
let a=50;
let b=100;

if (confirm("please add the value of a and b")) {
    
  
    console.log(a+b);
}

else if (confirm("please multiply the value of a and b")) {
     console.log(a*b);
     
}
else if (confirm("please subtract the value of a and b")) {
    console.log(a-b);
    
}
else if (confirm("please modulus the value of a and b")) {
    console.log(a%b);
    
}
else if (confirm("please divide the value of a and b")) {
    console.log(a/b);
    
}
else{
   alert("you have choosen no action")
}

// marks of students
// let name = window.prompt("Enter your name:"); 
// let marks = window.prompt("Enter your marks out of 100:");


// marks = parseInt(marks);


// let result = "";  
//     if (marks >= 90 && marks<=100) 
//         {
//         result = `Congratulations ${name}! You scored ${marks} and received an A+ grade.`;
//     } 
//     else if (marks >= 80) {
//         result = `Well done ${name}! You scored ${marks} and received an A grade.`;
//     }
//      else if (marks >= 70) {
//         result = `Good job ${name}! You scored ${marks} and received a B grade.`;
//     }
//      else if (marks >= 60) {
//         result = `Nice try ${name}. You scored ${marks} and received a C grade.`;
//     } 
//     else if (marks >= 50) {
//         result = `You passed ${name} with a score of ${marks}, and received a D grade.`;
//     } 
//     else {
//         result = `Sorry ${name}, you failed with a score of ${marks}. Better luck next time.`;
//     }
//     window.alert(result);
}
abc();