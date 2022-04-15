import { PASSWORD_UPPERCASE_REGEX, EMAIL_REGEX } from "./helper-utils";

const validLogin = ({ email, password }, loginErrors) => {
  if (!email)
    return {
      isValid: false,
      errors: { ...loginErrors, email: "Email is required." },
    };
  if (!password)
    return {
      isValid: false,
      errors: { ...loginErrors, password: "Password is required." },
    };

  return {
    isValid: true,
    errors: {
      email: "",
      password: "",
    },
  };
};

const validSignUp = (
  { firstName, lastName, email, newPassword },
  signupErrors
) => {
  if (!firstName)
    return {
      isValid: false,
      errors: { ...signupErrors, firstName: "First name is required." },
    };
  if (!lastName)
    return {
      isValid: false,
      errors: { ...signupErrors, lastName: "Last name is required." },
    };
  if (!email)
    return {
      isValid: false,
      errors: { ...signupErrors, email: "Email name is required." },
    };
  if (!newPassword)
    return {
      isValid: false,
      errors: { ...signupErrors, newPassword: "Create New Password" },
    };
  if (!EMAIL_REGEX.test(email))
    return {
      isValid: false,
      errors: { ...signupErrors, email: "Enter a valid EmailID." },
    };
  if (!PASSWORD_UPPERCASE_REGEX.test(newPassword))
    return {
      isValid: false,
      errors: { ...signupErrors, newPassword: "Must contain a Uppercase." },
    };
  return {
    isValid: true,
    errors: {
      firstName: "",
      lastName: "",
      newpassword: "",
      email: "",
    },
  };
};

export { validLogin, validSignUp };
