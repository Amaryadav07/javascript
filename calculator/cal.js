let ans = "";
let pressed = (value) => {
    let show = document.querySelector("#display");
    ans = ans + value;
    show.innerHTML = ans;
}

let equall = () => {
    let show = document.querySelector("#display");
    show.innerHTML = eval(ans); 
    ans = eval(ans); 
    ans = ans.toString(); 
}


let del = () => {
    let show = document.querySelector("#display");
    ans = ans.slice(0, -1); 
    show.innerHTML = ans;
}


let clearr = () => {
    let show = document.querySelector("#display");
    ans = "";  
    show.innerHTML = ans;  
}

let squ=()=>{
    let show = document.querySelector("#display");
    ans=ans*ans;
    show.innerHTML = ans; 

}
