import React from "react";

const BioSection = ({ year, description }) => {
  return (
    <div className="indent-[-3px]">
      <span className="mr-3 font-bold">{year}</span>
      {description}
    </div>
  );
};

export default BioSection;
