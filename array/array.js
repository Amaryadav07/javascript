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
  

    let arr=[10,"amar",30,true,null];
   
    document.write("<ul>");
    for (let index = 0; index < 5; index++) {
      document.write("<li>" +arr[index] +"</li>")
     
      
    }

  document.write("</ul");
  }
  
  arr()