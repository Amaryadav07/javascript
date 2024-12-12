function arr(){

    //  let Fruits=["Apple","Mango","Banana","Grapes"]
       
    //   Fruits.pop(); // remove last element (Grapes)
    //   Fruits.pop(); // remove second last (banana)
    //   document.write(Fruits)
  
      //   let ans=Fruits.push("Orange","Pineapple")
      //  document.write(ans) // return updated length
      //   document.write(Fruits) // updated array
  
      // Fruits.shift() // remove first element
      // document.write(Fruits) // updated array
  
      // Fruits.unshift("Orange",12) // adds in starting
      // document.write(Fruits)
  
      // let ans=Fruits.length;
      // document.write(ans)  // 4 
  
  
    //    let arr1=[3,5,2,4,9,7]
      // let arr2=[4,5,6]
  
      // let final= arr1.concat(arr2)
      // document.write(final)
  
      // let ans=arr1.sort() // give in ascending order
      // document.write(ans)
  
      //  let ans=arr1.reverse()
      //  document.write(ans) // reverse the array
      
  
    //   let ans=arr1.sort().reverse()
    //   document.write(ans) // give in decending order
  

  //   let arr=[10,"amar",30,true,null];
   
  //   document.write("<ul>");
  //   for (let index = 0; index < 5; index++) {
  //     document.write("<li>" +arr[index] +"</li>")
     
      
  //   }

  // document.write("</ul");
  // 



  // let arr1=[3,5,2,4,9,7]

   // let ans=arr1.slice(0,-1)//output 3,5,2,4,9
  
   // let ans=arr1.slice(0,0)// empty
   // --------------------------------------------------splice method-------------------------------------------------------------
  // arr1.splice(2,0,25)//3,5,25,2,4,9,7
  // // arr1.splice(2,1,25) // here the  output is3,5,25,4,9,7
  // document.write(arr1)
// --------------------------------map method--------------------------------------------------always  returns array
// let ans=arr1.map(function(num){
  
// return num*2;
// })

// ------------------------------------------filter---------------------------------------------------always  returns array

// let ans=arr1.filter(function(num){

//    return num%2==0; // it will give even number
//   return num%2!=0 // it will give odd number
//   })


// --------------------------------------------------for each------------------------------------------

// let ans=arr1.forEach(function(num){       // always return string value not array and no return method id used we can directly console it.
//   console.log(num*2)
// })
// ---------------------------------------for of----------------------------------

// for(let i of arr1){
//   console.log(i)                      // always return string value
// }

let arr=[1,2,3,4,5,6,7,8,9,10]
console.log( "A ",arr);
let arr1=arr.slice(2,5)
console.log(arr1)
console.log("B ",arr)
let arr2=arr.splice(1,6)
console.log(arr2)
console.log("C ",arr)

function binary(num){
  return num.toString(2) // this will convert in binary 
}


 let myarr=arr.map(binary)
   
console.log(myarr)
  }
arr();