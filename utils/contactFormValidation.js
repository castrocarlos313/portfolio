const contactFormValidation = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "El email es invalido";
  }

  if (!values.name) {
    errors.name = "El nombre es obligatorio";
  }

  if (!values.message) {
    errors.message = "El mensaje es obligatorio";
  }

  if (!values.reason) {
    errors.reason = "El asunto es obligatorio";
  }

  if (!values.captcha) {
    errors.captcha = "Falta captcha";
  }

  return errors;
};

export default contactFormValidation;
