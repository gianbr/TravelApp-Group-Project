export const validation = (data) => {
  let errors = {};
  let validateEmail =
    /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
  let validatePassword = /^(?=.*[A-Za-z])(?=.*\d).{8,15}$/;
  if (!data.email || !validateEmail.test(data.email)) {
    errors.email = "Ingrese un correo valido";
  }
  if (!validatePassword.test(data.password)) {
    errors.password =
      "La contraseña debe tener al menos 8 caracteres, una letra y un numero";
  }
  return errors;
};
