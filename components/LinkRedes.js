import Image from "next/image";
import Link from "next/link";
import React from "react";

const LinkRedes = ({ href, img, name }) => {
  return (
    <Link href={href} passHref>
      <a target="_blank" rel="noreferrer">
        <div className="flex flex-row items-center bg-white rounded-xl pr-2 cursor-pointer">
          <div className="h-[40px] w-[40px] relative  transition-transform bg-white rounded-2xl">
            <Image
              layout="fill"
              objectFit="cover"
              src={img}
              alt="icono red social"
            />
          </div>
          <span className="mx-2">{name}</span>
        </div>
      </a>
    </Link>
  );
};

export default LinkRedes;
