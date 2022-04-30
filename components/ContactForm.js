import { useFormik } from "formik";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { headers } from "../next.config";
import contactFormValidation from "../utils/contactFormValidation";
import InputForm from "./InputForm";
import LabelForm from "./LabelForm";
import toast from "react-hot-toast";
import Spinner from "./Spinner";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const captcha = useRef();
  const formik = useFormik({
    initialValues: {
      email: "",
      reason: "",
      name: "",
      message: "",
      captcha: null,
    },
    validate: contactFormValidation,
    onSubmit: (values, { resetForm }) => {
      const { email, reason, name, message } = values;

      setLoading(true);

      toast
        .promise(
          fetch(process.env.NEXT_PUBLIC_API_URL + "/contact", {
            body: JSON.stringify({ email, reason, name, message }),
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }),
          {
            loading: "Enviando...",
            success: "Mensaje enviado!!!",
            error: "No se pudo enviar el mensaje...",
          }
        )
        .catch((err) => {
          console.log({ ...err });
        })
        .finally(() => {
          captcha.current.reset();
          resetForm();
          setLoading(false);
        });
    },
  });

  return (
    <div>
      <h2 className="text-xl font-bold text-center">Contactame</h2>
      <form className="flex flex-col gap-3 mt-3" onSubmit={formik.handleSubmit}>
        <InputForm
          name="Email"
          error={formik.errors.email}
          id="email"
          onchange={formik.handleChange}
          placeHolder="Ingrese su email"
          value={formik.values.email}
          type="text"
        />
        <InputForm
          name="Nombre"
          error={formik.errors.name}
          id="name"
          onchange={formik.handleChange}
          placeHolder="Ingrese su nombre"
          value={formik.values.name}
          type="text"
        />
        <InputForm
          name="Asunto"
          error={formik.errors.reason}
          id="reason"
          onchange={formik.handleChange}
          placeHolder="Ingrese su asunto"
          value={formik.values.reason}
          type="text"
        />
        <div className="flex flex-col">
          <textarea
            className="rounded p-3"
            id="message"
            cols="30"
            rows="5"
            placeholder="Mensaje"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <LabelForm
            name="Mensaje"
            id="message"
            error={formik.errors.message}
          />
        </div>
        <div>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
            onChange={(e) => formik.setFieldValue("captcha", e)}
            ref={captcha}
          />
          <LabelForm name="" error={formik.errors.captcha} />
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <button
            type="submit"
            className="bg-yellow-400 p-3 rounded hover:bg-yellow-300 font-bold"
          >
            Enviar
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
