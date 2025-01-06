function task2() {
    
//Question 1: Greet the User ----------------------------------------------------------------------------------------
//   Use a prompt to ask the user for their name.
//   Display an alert that says, "Hello, [Name]!" using their input.

//  let name=prompt("Enter your name")
//  alert(`"Hello", ${name}`);

//  Question 2: Confirm to Show Message --------------------------------------------------------------------------

//   Ask the user: "Do you like JavaScript?" using confirm.
//   If they click OK, show an alert with "That's great!".
//   If they click Cancel, show an alert with "No worries, keep learning!".

// let user =confirm("Do you like JavaScript?")
// if (user==true) {
//     alert(` "That's great!"`)
// }
// else{
//     alert(`"No worries, keep learning!"`)
// }

// Question 3: Replace Text -----------------------------------------------------------------------------
  
// You have a string: "JavaScript is easy. I love JavaScript!"
// Replace "JavaScript" with "Coding" globally.
// Display the new string using an alert.

// let str="JavaScript is easy. I love JavaScript!";
// let ans=str.replace(/JavaScript/g , "Coding")
// alert(ans)


// Question 4: Count Numbers ------------------------------------------------------------------------------

// Write a for loop to print numbers from 1 to 10 in the console.
// let number;
// for (let number = 1; number <= 10; number++) {
//   console.log(number)
//     }

// Question 5: ------------------------------------------------------------------------------------------
// Use a prompt to ask the user to enter 3 favorite fruits one by one.
// Store them in an array.
// Display the array in an alert: "Your favorite fruits are:
//  [fruit1, fruit2, fruit3]".

// let user=prompt("enter your 1st favorite fruits .")
// let user1=prompt("enter your 2nd favorite fruits .")
// let user2=prompt("enter your 3rd favorite fruits .")
// let arr=[user,user1,user2]
// alert(`"Your favorite fruits are: [${user} ${user1} ${user2}]"`)

// Question 7: Sum of Numbers in an Array ----------------------------------------------------------------

// Create an array of numbers: [10, 20, 30, 40, 50].
// Use a loop to calculate the sum of all the numbers in the array.
// Display the result using an alert.

// let arr= [10, 20, 30, 40, 50]
// let sum=0;
// for (let i = 0; i< 5; i++) {
//     sum=sum +arr[i];
// }
//     alert("Sum of the Array is:"+" " + sum)


// Question 8: Filter Even Numbers --------------------------------------------------------------------------

// Use a prompt to ask the user to enter 5 numbers one by one.
// Store them in an array.
// Use the filter() method to find all the even numbers.
// Display the even numbers in an alert.

let user=prompt("enter your 1st number .")
let user1=prompt("enter your 2nd number .")
let user2=prompt("enter your 3rd number .")
let user3=prompt("enter your 4th number .")
let user4=prompt("enter your 5th number .")

let arr=[user,user1,user2,user3,user4]
let ans=arr.filter( (num)=>(num%2==0) )
alert(ans)


// Question 9: Replace and Uppercase -------------------------------------------------------------------------------

// You have a string: "html is easy. html is fun!".
// Replace "html" with "CSS" globally and convert the entire string to uppercase.
// Show the final string in an alert.

// let str= "html is easy. html is fun!"
// let ans=str.replace(/html/g,"CSS").toUpperCase()
// alert(ans)

// Question 10: Multiplication Table -------------------------------------------------------------------------------------

// Ask the user to enter a number using prompt.
// Use a for loop to display the multiplication table for that number (from 1 to 10).
// Display the result in the console or with alert (e.g., "5 x 1 = 5"). 


// let user=parseInt( prompt("Enter your number")) 
// let ans='';
// for (let i = 1; i <= 10; i++) {
//     ans =ans + `${user} * ${i} = ${user * i}\n`; 
  
// }
// alert(ans)
}
task2()