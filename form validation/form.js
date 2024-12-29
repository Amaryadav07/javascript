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
        document.querySelector("#name").focus();
        return false;
    }

   
    if(isNaN(mobile)){
        errormobile.setAttribute("placeholder", "Please Enter a valid Mobile Number");
        errormobile.style.borderColor = "red"; 
        document.querySelector("#mobile").focus();
        return false;
      }
      else if (mobile ==="") {
        errormobile.setAttribute("placeholder", "Please Enter your Mobile");
        errormobile.style.borderColor = "red"; 
        document.querySelector("#mobile").focus();
        return false;
    }
    else if(mobile.length!=10){
        errormobile.setAttribute=("placeholder", "Please Enter 10 digit Mobile Number");
        errormobile.style.borderColor = "red"; 
        document.querySelector("#mobile").focus();
        return false;
      }

      if(!(email.includes('@') && email.includes('.com'))){
        erroremail.setAttribute("placeholder", "Please Enter a Valid Email");
        document.querySelector("#email").focus();
        erroremail.style.borderColor = "red";
        return false;
      }

      else if (email === "") {
        erroremail.setAttribute("placeholder", "Please Enter your Email");
        erroremail.style.borderColor = "red";
        document.querySelector("#email").focus();
        return false;
    }
    
    if(!(
        password.match(/[1234567890]/) &&
        password.match(/[!@#$%^&*()]/) &&
        password.match(/[a-z]/) &&
        password.match(/[A-Z]/)
      ))
      {
        document.querySelector("#password").focus();
        alert("Password should have at least one uppercase letter, one lowercase letter, one digit")
         return false
      }
   
      else if (password === "") {
        errorpassword.setAttribute("placeholder", "Please Enter your Password");
        document.querySelector("#password").focus();
        errorpassword.style.borderColor = "red";
        return false;
    }

    
    else if (confirm === "") {
        errorconfirm.setAttribute("placeholder", "Please Confirm your Password");
        errorconfirm.style.borderColor = "red";
        document.querySelector("#confirm").focus();
        return false;
    }
    
    else if (password !== confirm) {
      errorconfirm.setAttribute("placeholder", "Passwords do not match");
      errorconfirm.style.borderColor = "red";
      document.querySelector("#confirm").value=" "
      document.querySelector("#confirm").focus();

        alert("Passwords do not match!");
        return false;
    }
    alert("Form Submitted Successfully!");
    document.querySelector("form").reset();
    return true;
});

