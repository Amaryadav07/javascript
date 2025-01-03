// let timee=new Date();

// let ans=timee.toLocaleString();
// console.log(ans.toLocaleString());
// let ans1=timee.getFullYear()//2025
// let ans2=timee.getMonth()
// let ans3=timee.getDay()
// let ans4=timee.getHours()
// let ans5=timee.getMinutes()
// let ans6=timee.getSeconds()
// let ans7=timee.getMilliseconds()
// console.log(ans1);
// console.log(ans2);
// console.log(ans3);
// console.log(ans4);
// console.log(ans5);
// console.log(ans6);
// console.log(ans7);


let here=()=>{
let time=new Date();
let ans =document.querySelector("#abc")
ans.innerHTML= time.toLocaleString();

let arr=["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"]

ans.innerHTML=arr[time.getDay()]


}