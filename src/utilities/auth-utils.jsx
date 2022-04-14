const validLogin = ({ email, password }, loginErrors) => {
  if (!email)
    return {
      isValid: false,
      errors: { ...loginErrors, email: "Email is required" },
    };
  if (!password)
    return {
      isValid: false,
      errors: { ...loginErrors, password: "Password is required" },
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
      errors: { ...signupErrors, newPassword: "Password name is required." },
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
