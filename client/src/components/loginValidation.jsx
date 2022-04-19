export const validation = (data) => {
  let errors = {};
  let validateEmail =
    /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
  if (!data.email || !validateEmail.test(data.email)) {
    errors.email = "Ingrese un correo valido";
  }
  return errors;
};
