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
export { validLogin };
