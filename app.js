$( document ).ready(function() {  

  //Password confirmation JS


  //Make a confirm Username component
  var $username = $("#username");
  var $confirmUsername = $("#confirm_username")


  //Problem: Hints are shown even when form is valid
  //Solution: Hide and show them at appropriate times
  var $password = $("#password");
  var $confirmPassword = $("#confirm_password");

  //Hide hints
  $("form span").hide();

  function isUsernameValid() {
    return $username.val().length > 8;
  }

  function areUsernamesMatching() {
    return $username.val() === $confirmUsername.val();
  }

  function isPasswordValid() {
    return $password.val().length > 8;
  }


  function arePasswordsMatching() {
    return $password.val() === $confirmPassword.val();
  }

  function canSubmit() {
    return isPasswordValid() && arePasswordsMatching() && isUsernameValid() && areUsernamesMatching();
  }

  function usernameEvent(){
      //Find out if password is valid  
      if(isUsernameValid()) {
        //Hide hint if valid
        $username.next().hide();
      } else {
        //else show hint
        $username.next().show();
      }
  }

  function passwordEvent(){
      //Find out if password is valid  
      if(isPasswordValid()) {
        //Hide hint if valid
        $password.next().hide();
      } else {
        //else show hint
        $password.next().show();
      }
  }

  function confirmUsernameEvent() {
    //Find out if username and confirmation match
    if(areUsernamesMatching()) {
      //Hide hint if match
      $confirmUsername.next().hide();
    } else {
      //else show hint 
      $confirmUsername.next().show();
    }
  }


  function confirmPasswordEvent() {
    //Find out if password and confirmation match
    if(arePasswordsMatching()) {
      //Hide hint if match
      $confirmPassword.next().hide();
    } else {
      //else show hint 
      $confirmPassword.next().show();
    }
  }

  var $email = $("#email");
  var $confirmEmail = $("#confirm_email");
  //hide hints
  // $("form span").hide();

  function validateEmail(){
      var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      var valid = emailReg.test($("#email").val());

      if(!valid) {
          $("#email").next().show();
      } else {
          $("#email").next().hide();
      }
  }



  function confirmEmailEvent() {
      //find out if password and confirmation match
      if($email.val() === $confirmEmail.val()) {
      //hide hint if matched
          $confirmEmail.next().hide();
      } else {
     //else show hint  
          $confirmEmail.next().show();
      }
  }

  function enableSubmitEvent() {
    $("#submit").prop("disabled", !canSubmit());
  }

  //When even happens on username input
  $username.focus(usernameEvent).keyup(usernameEvent).keyup(confirmUsernameEvent).keyup(enableSubmitEvent);

  //When event happens on confirmation input
  $confirmUsername.focus(confirmUsernameEvent).keyup(confirmUsernameEvent).keyup(enableSubmitEvent);



  //When event happens on password input
  $password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

  //When event happens on confirmation input
  $confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

  $email.focus(validateEmail).keyup(validateEmail).keyup(confirmEmailEvent).keyup(confirmEmailEvent);

   //when event happenson confirmation input
  $confirmEmail.focus(confirmEmailEvent).keyup(confirmEmailEvent);

  enableSubmitEvent();


});





