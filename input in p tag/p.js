let imp = document.querySelector("#imp"); 
let displayText = document.querySelector("#displayText"); 


imp.addEventListener("input", () => {
  displayText.innerHTML = imp.value; 
});
