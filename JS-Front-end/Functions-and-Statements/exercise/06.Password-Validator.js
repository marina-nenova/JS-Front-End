function passwordValidator(password) {
  let validPassowrd = true;

  function checkLength(password) {
    if (password.length < 6 || password.length > 10) {
      console.log("Password must be between 6 and 10 characters");
      validPassowrd = false;
    }
  }
  function checkCharacters(password) {
    if (!/^[A-Za-z0-9]*$/.test(password)) {
      console.log("Password must consist only of letters and digits");
      validPassowrd = false;
    }
  }
  function checkForTwoDigits(password) {
    if (!/(\D*\d){2,}/.test(password)) {
      console.log("Password must have at least 2 digits");
      validPassowrd = false;
    }
  }

  checkLength(password);
  checkCharacters(password);
  checkForTwoDigits(password);
  
  if (validPassowrd) {
    console.log("Password is valid");
  }
}

passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator("Pa$s$s");
