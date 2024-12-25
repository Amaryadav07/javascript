let imp = document.querySelector("#imp"); 
let displayText = document.querySelector("#displayText"); 

let abc=()=>{
  displayText.innerHTML = imp.value;
}

imp.addEventListener("input",abc );

