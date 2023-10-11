export const checkValidateData = (email, password, name) => {
  let errors = {};

  if (name) {
    const isNameValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);
    if (!isNameValid) errors.name = "Please enter a valid name";
  } else {
    errors.name = "Name is required";
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  if (!isEmailValid) errors.email = "Please enter a valid email address";

  if (!/^(?=.*[a-z])/.test(password)) {
    errors.password = "Password must contain at least one lowercase character.";
  } else if (!/^(?=.*[A-Z])/.test(password)) {
    errors.password = "Password must contain at least one uppercase character.";
  } else if (!/^(?=.*\d)/.test(password)) {
    errors.password = "Password must contain at least one digit.";
  } else if (!/^(?=.*[@$!%*?&#])/.test(password)) {
    errors.password =
      "Password must contain at least one special character (@, $, !, %, *, ?, &, #).";
  } else if (!/^.{8,}$/.test(password)) {
    errors.password = "Password must be at least 8 characters long.";
  }

  return errors;
};
