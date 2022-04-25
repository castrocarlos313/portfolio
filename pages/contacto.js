import Link from "next/link";
import React from "react";
import LinkRedes from "../components/LinkRedes";

const Contacto = () => {
  return (
    <div className="w-full">
      <div className="flex h-[80vh]  justify-center items-center">
        <main className="max-w-3xl min-w-[400px] w-3/5 mx-auto my-3 bg-white bg-opacity-40 backdrop-blur-md p-10 rounded">
          <div className="flex flex-col lg:flex-row lg:gap-10">
            <div>
              <h1 className="text-3xl">Contactame</h1>
              <div className="mt-10">
                <p className="text-lg">
                  <span className="font-bold">Telefono:</span> 1136720498
                </p>
                <p className="text-lg">
                  <span className="font-bold">Email:</span>{" "}
                  castrocarlosgabriel23@gmail.com
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-xl">Redes</h3>
              <div className="flex gap-3 mt-3">
                <LinkRedes
                  href={"https://www.linkedin.com/in/carlos-castro-21b04a192/"}
                  img="/static/iconos/linkedin.png"
                />
                <LinkRedes
                  href={"https://github.com/castrocarlos313"}
                  img="/static/iconos/github.png"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contacto;
