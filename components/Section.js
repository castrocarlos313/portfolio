import React from "react";

const Section = ({ children, title }) => {
  return (
    <section className="mt-10">
      <h3 className="text-3xl border-b-2 border-b-gray-600 block p-3 title">
        {title}
      </h3>
      <div className="mt-3 ">{children}</div>
    </section>
  );
};

export default Section;
