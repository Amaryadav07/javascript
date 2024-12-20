
let countValue = 0;
let ans = document.getElementById('counter');


let increment=()=> {
  
  if (countValue==0) {
    
    let input=confirm("Do you want an increment in number")
    if (input==true) {
      countValue++;
      ans.innerHTML = countValue;
     
    }
    else{
      alert("Try again")
    }
  }
  else if (countValue>0) {
    countValue++;
    ans.innerHTML = countValue;
  }
  
}

let decrement=()=> {
  if (countValue > 0) {
    countValue--;
    ans.innerHTML = countValue;
  }
}

let reset=()=>{
  if (countValue>0 ) {
    countValue=0;
    ans.innerHTML = countValue;
  }


}
