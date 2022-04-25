/* eslint-disable @next/next/no-img-element */
import React from "react";

const Conocimiento = ({ img, description }) => {
  return (
    <div className="flex">
      <img
        src={img}
        width="10"
        height="10"
        alt="icono"
        className="basis-1/4 p-3"
      />
      <p className="m-auto basis-3/4">{description}</p>
    </div>
  );
};

export default Conocimiento;
