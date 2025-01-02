
   let input;
   let start=()=>{
    let count=10;
     input=setInterval(()=>{
        console.log(count);
        count--;
        if (count===-1) {

          clearInterval(input)  
        }
       
    },1000);
   
}

let stop=()=>{

clearInterval(input)

}


//set time out is asyncrnous;
// so first ending is print after then Process

// console.log("starting"); // it will be printed first

// setTimeout(()=>{
//     console.log("Process");  // it will be printed third due to asyncronous behaviour of settimeout()
// },3000);

// console.log("Ending"); // it will be printed second