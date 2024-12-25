let submitt=()=>{
    let name=document.querySelector("#name").value;
    let mobileno=document.querySelector("#mobile").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    let confirm=document.querySelector("#confirm").value;

    let errorname=document.querySelector("#errorname");
    let errormobile=document.querySelector("#errormobile");
    let erroremail=document.querySelector("#erroremail");
    let errorpassword=document.querySelector("#errorpassword");
    let errorconfirm=document.querySelector("#errorconfirm");


    if(name===""){
        errorname.innerHTML="Please Enter your Name";
        errorname.style.color="red";
        return false;
}

}