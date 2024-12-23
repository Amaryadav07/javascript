let changeImage=(imageSrc) =>{
    const displayDiv = document.getElementById('displayDiv');
    displayDiv.innerHTML = `<img src="${imageSrc}" style="max-width: 100%; max-height: 100%;">`;
  }
  let  down=()=>{
    const displayDiv = document.getElementById('displayDiv');
    displayDiv.innerHTML.style.backgroundColor="red"
  }

  // let red=()=>{

  //   let ans=document.getElementById("displayDiv")
  //   ans.style.backgroundColor="red"
  // }

  // let blue=()=>{

  //   let ans=document.getElementById("displayDiv")
  //   ans.style.backgroundColor="blue"
  // }
  // let yellow=()=>{

  //   let ans=document.getElementById("displayDiv")
  //   ans.style.backgroundColor="yellow"
  // }
  // let redleave=()=>{
  //   let ans=document.getElementById("displayDiv")
  //    ans.style.backgroundColor="white"

  // }
  // let blueleave=()=>{
  //   let ans=document.getElementById("displayDiv")
  //    ans.style.backgroundColor="white"

  // }
  // let yellowleave=()=>{
  //   let ans=document.getElementById("displayDiv")
  //    ans.style.backgroundColor="white"

  // }