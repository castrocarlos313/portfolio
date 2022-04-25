import { useEffect, useState } from "react";
import ReactTypingEffect from "react-typing-effect";

const MainHeader = () => {
  return (
    <div className=" max-w-6xl min-w-[400px] w-3/5 bg-green-700 mx-auto mt-10 p-3 rounded-t">
      <div className="flex justify-center">
        <ReactTypingEffect
          text={["Carlos", "un fullstack developer"]}
          className=""
          displayTextRenderer={(text) => (
            <h1 className="text-2xl text-center text-white">
              Hola!, soy {text}
            </h1>
          )}
          cursor="_"
          cursorRenderer={(cursor) => (
            <h1 className="text-2xl text-white z-1">{cursor}</h1>
          )}
        />
      </div>
    </div>
  );
};

export default MainHeader;
