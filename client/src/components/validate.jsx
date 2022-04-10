export const validate = (data, email = {}) => {
    let errors = {};
    if (!data.email) {
      errors.email = "Ingrese un correo valido";
    } 
    if (!data.password) errors.password = "Ingrese una contraseña";
    if (!data.username) errors.username = "Ingrese un nombre de usuario";
    return errors;
  };