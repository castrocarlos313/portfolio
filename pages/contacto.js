import Link from "next/link";
import React from "react";
import ContactForm from "../components/ContactForm";
import LinkRedes from "../components/LinkRedes";

const Contacto = () => {
  return (
    <div className="w-full">
      <div className="flex h-[80vh] justify-center items-center my-16 ">
        <main className="max-w-3xl min-w-[400px] w-3/5 mx-auto my-3 bg-white bg-opacity-50 backdrop-blur-lg px-10 pt-10  pb-4 rounded">
          <ContactForm />
          <div className="mt-3 flex justify-center">
            <div className="flex gap-3">
              <LinkRedes
                href={"https://www.linkedin.com/in/carlos-castro-21b04a192/"}
                img="/static/iconos/linkedin.png"
                name="LinkedIn"
              />
              <LinkRedes
                href={"https://github.com/castrocarlos313"}
                img="/static/iconos/github.png"
                name="GitHub"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contacto;
