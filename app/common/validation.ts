let Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
let password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
let usernameRegex = /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/;

const EmailValidate = (text: string) => {
  if (Email.test(text) === false) {
    return false;
  } else {
    return true;
  }
};
const PasswordValidate = (text: string) => {
  if (password.test(text) === false) {
    return false;
  } else {
    return true;
  }
};
const UsernameValidation = (text: string) => {
  if (usernameRegex.test(text)) {
    return true;
  } else {
    return false;
  }
};

export default {EmailValidate, PasswordValidate, UsernameValidation};
