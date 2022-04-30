import React from "react";
import LabelForm from "./LabelForm";

const InputForm = ({
  id,
  value,
  onchange,
  placeHolder,
  error,
  type = "text",
}) => {
  return (
    <div className="flex flex-col">
      <input
        className="p-2 rounded"
        type={type}
        id={id}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => onchange(e)}
      />
      <LabelForm error={error} />
    </div>
  );
};

export default InputForm;
