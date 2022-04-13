export const validate = (data) => {
  let errors = {};
  let validateEmail = /\S+@\S+\.\S+/;
  let validatePassword = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  let validateUsername = /^[a-zA-Z]+(\S)*[a-zA-Z0-9]+.{1,20}$/;
  if (!data.email && !validateEmail.test(data.email)) {
    errors.email = "Ingrese un correo valido";
  }
  if (!data.password) errors.password = "Ingrese una contraseña";
  if (!validatePassword.test(data.password)) {
    errors.password =
      "La contraseña debe tener al menos 8 caracteres, una letra y un numero";
  }
  if (!data.username) errors.username = "Ingrese un nombre de usuario";
  if (!validateUsername.test(data.username)) {
    errors.username = "El nombre de usuario debe tener al menos 3 caracteres";
  }
  if (!data.title || data.title.length > 30)
    errors.title = "El titulo es obligatorio, y con un maximo de 30 letras";
  if (!data.price || data.price <= 0)
    errors.price = "El precio es obligatorio y no puede ser menor o igual a 0";
  if (!data.images) errors.images = "Debe ingresar al menos 1 imagen";
  if (!data.included)
    errors.included = "Debe ingresar al menos 1 servicio incluido";
  if (!data.description) errors.description = "La descripción es obligatoria";
  if (!data.city) {
    errors.city = "La ciudad es obligatoria";
  } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(data.city)) {
    errors.city = "Debe contener solo letras";
  }
  if (!data.location) errors.location = "La ubicación es obligatoria";
  if (!data.stock || data.stock <= 0)
    errors.stock = "El stock debe ser mayor a 0";
  return errors;
};
