import Image from "next/image";
import Link from "next/link";
import React from "react";

const LinkRedes = ({ href, img }) => {
  return (
    <Link href={href} passHref>
      <div className="h-[50px] w-[50px] relative hover:scale-110 transition-transform cursor-pointer">
        <Image
          layout="fill"
          objectFit="cover"
          src={img}
          alt="icono red social"
        />
      </div>
    </Link>
  );
};

export default LinkRedes;
