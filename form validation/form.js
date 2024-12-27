document.querySelector("#button").addEventListener("click", function(event) {
    
    event.preventDefault();

        let name=document.querySelector("#name").value;
        let mobile=document.querySelector("#mobile").value;
        let email=document.querySelector("#email").value;
        let password=document.querySelector("#password").value;
        let confirm=document.querySelector("#confirm").value;

        let errorname = document.querySelector("#name");
        let errormobile = document.querySelector("#mobile");
        let erroremail = document.querySelector("#email");
        let errorpassword = document.querySelector("#password");
        let errorconfirm = document.querySelector("#confirm");
    
        errorname.setAttribute("placeholder", "");
        errormobile.setAttribute("placeholder", "");
        erroremail.setAttribute("placeholder", "");
        errorpassword.setAttribute("placeholder", "");
        errorconfirm.setAttribute("placeholder", "");

       

    if (name === "") {
        errorname.setAttribute("placeholder", "Please Enter your Name");
        errorname.style.borderColor = "red"; 
        return false;
    }

   
    if(isNaN(mobile)){
        errormobile.setAttribute("placeholder", "Please Enter a valid Mobile Number");
        errormobile.style.borderColor = "red"; 
        return false;
      }
      else if (mobile === "") {
        errormobile.setAttribute("placeholder", "Please Enter your Mobile");
        errormobile.style.borderColor = "red"; 
        return false;
    }
    else if(mobile.length!=10){
        errormobile.setAttribute=("placeholder", "Please Enter 10 digit Mobile Number");
        errormobile.style.borderColor = "red"; 
        return false;
      }

      if(!(email.includes('@') && email.includes('.com'))){
        erroremail.setAttribute("placeholder", "Please Enter a Valid Email");
        erroremail.style.borderColor = "red";
        return false;
      }

      else if (email === "") {
        erroremail.setAttribute("placeholder", "Please Enter your Email");
        erroremail.style.borderColor = "red";
        return false;
    }
    
    if(!(
        password.match(/[1234567890]/) &&
        password.match(/[!@#$%^&*()]/) &&
        password.match(/[a-z]/) &&
        password.match(/[A-Z]/)
      ))
      {
        alert("Password should have at least one uppercase letter, one lowercase letter, one digit")
         return false
      }
   
      else if (password === "") {
        errorpassword.setAttribute("placeholder", "Please Enter your Password");
        errorpassword.style.borderColor = "red";
        return false;
    }

    
    else if (confirm === "") {
        errorconfirm.setAttribute("placeholder", "Please Confirm your Password");
        errorconfirm.style.borderColor = "red";
        return false;
    }
    
    else if (password !== confirm) {
        errorconfirm.setAttribute("placeholder", "Passwords do not match");
        errorconfirm.style.borderColor = "red";
        alert("Passwords do not match!");
        return false;
    }
    alert("Form Submitted Successfully!");
    document.querySelector("form").reset();
    return true;
});

