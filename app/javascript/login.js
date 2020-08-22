const login = () => {
  const userName = document.getElementById("user_name");
  const userEmail = document.getElementById("user_email");
  const userPass = document.getElementById("user_password");
  const userPassCheck = document.getElementById("user_password_confirmation");
  const name_error = document.getElementById("name-error-message")
  const email_error1 = document.getElementById("email-error-message1")
  const email_error2 = document.getElementById("email-error-message2")
  const pass_error1 = document.getElementById("password-error-message1")
  const pass_error2 = document.getElementById("password-error-message2")
  const pass_error3 = document.getElementById("password-error-message3")
  const pass_confirmation_error = document.getElementById("password-confirmation-error-message")

  userName.addEventListener('click', function(){
    if (!userName.value) {
      userName.setAttribute("class", "error");
      name_error.style.display = "inline";
    } else {
      userName.setAttribute("class", "success");
      name_error.style.display = "none";
    }
  });
  userName.addEventListener('input', function(){
    name_error.style.display = "none";
  });

  userEmail.addEventListener('click', function(){
    if (!userEmail.value) {
      userEmail.setAttribute("class", "error");
      email_error1.style.display = "inline";
    } else {
      userEmail.setAttribute("class", "success");
      email_error1.style.display = "none";
    }
  });
  userEmail.addEventListener('input', function(){
    const emailExp = /^[\w+\-.]+@[a-z\d\-.]+\.[a-z]+$/;
    email_error1.style.display = "none";

    if (emailExp.test(userEmail.value)) {
      userEmail.setAttribute("class", "success");
      email_error2.style.display = "none";
    } else {
      userEmail.setAttribute("class", "error");
      email_error2.style.display = "inline";
    }
  });

  userPass.addEventListener('click', function(){
    if (!userPass.value) {
      userPass.setAttribute("class", "error");
      pass_error1.style.display = "inline";
    } else {
      userPass.setAttribute("class", "success");
      pass_error1.style.display = "none";
    }
  });
  userPass.addEventListener('input', function(){
    const PassExp = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]+$/;
    pass_error1.style.display = "none";
    
    if (PassExp.test(userPass.value)) {
      userPass.setAttribute("class", "success");
      pass_error2.style.display = "none";
    } else {
      userPass.setAttribute("class", "error");
      pass_error2.style.display = "inline";
    }
    if (userPass.value.length >= 6 ) {
      userPass.setAttribute("class", "success");
      pass_error3.style.display = "none";
    } else {
      userPass.setAttribute("class", "error");
      pass_error3.style.display = "inline";
    }
  });

  userPassCheck.addEventListener('click', function(){
    const passCheckExp = userPass.value

    if (userPassCheck.value === passCheckExp) {
      userPassCheck.setAttribute("class", "success");
      pass_confirmation_error.style.display = "none";
    } else {
      userPassCheck.setAttribute("class", "error");
      pass_confirmation_error.style.display = "inline";
    }
  });
  userPassCheck.addEventListener('input', function(){
    const passCheckExp = userPass.value

    if (userPassCheck.value === passCheckExp) {
      userPassCheck.setAttribute("class", "success");
      pass_confirmation_error.style.display = "none";
    } else {
      userPassCheck.setAttribute("class", "error");
      pass_confirmation_error.style.display = "inline";
    }
  });
}

window.addEventListener("load",login)