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


// let here=()=>{
// let time=new Date();
// let ans =document.querySelector("#abc")
// ans.innerHTML= time.toLocaleString();

// let arr=["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"]

// ans.innerHTML=arr[time.getDay()]


// }
setInterval(()=>{
    let show=document.querySelector("#display");
    let time=new Date();
    show.innerHTML=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
},1000)


// let alarm=()=>{
//     setInterval(()=>{
//     let show=document.querySelector("#display")
//     let inp=document.querySelector("#input").value
//     let  time=new Date()
//     let alarmtime=`${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}`
//     if (alarmtime==inp) {
//         show.innerHTML="Alarm is ringing"
//     }
//     else{
//         show.innerHTML="alarm set"
//     }

// },1000)
// }
