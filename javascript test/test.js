function abc() {
    
    const number=[3,7,1,9,2]
    let ans=number.sort()
    console.log(ans);
    
    let ans2=number.map((num)=>num*2)
    console.log(ans2)



    let user=confirm("Do you want to see the number from 1 to 10")
    if (user==true) {
        let assume=''
        for (let i = 1; i <= 10; i++) {
           assume=assume+`${i}\n`
            
        }
       alert(assume)
    }
    else{
        alert("you cancelled the action")
    }


}
abc()
function def() {
    
let num=prompt("enter your number")
let ans=''
for (let i = 1; i <= 10; i++) {
  ans=ans + `${num}*${i}=${num*i}\n`
    
}
alert(ans)
}
def()

function clickk() {
let any=document.getElementById("name")
let result=any.innerHTML="Hello, Javascript";


}
