let set=()=>{

// localStorage.setItem("name", "amarnath yadav")
// localStorage.setItem("age", 30)


// let ans1=localStorage.getItem("name")
// document.querySelector("#show").innerHTML=ans1;

// let ans=document.querySelector("#show")
// let a=localStorage.getItem("name")
// let b=localStorage.getItem("age")
// ans.innerHTML=`Hello your name is ${a} and your age is ${b}`
let ana=document.querySelector("#abc").value
let aba=document.querySelector("#xyz").value

localStorage.setItem("name",ana)
localStorage.setItem("age",aba)

}
let del=()=>{

    // let ans=document.querySelector("#show")
    // ans.innerHTML=localStorage.removeItem("name")
    // ans.innerHTML=localStorage.removeItem("age")
    localStorage.clear()

}
// -----------------------------2nd method------------------------------------------------------------

// let SetALL=()=>{
//     let names = document.querySelector("#name").value;
//     let ages = document.querySelector("#age").value;
//     localStorage.setItem("name",names)
//     localStorage.setItem("age",ages)
// }


// let getAll=()=>{
//     localStorage.clear()
// }
