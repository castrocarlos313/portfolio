import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Layout.module.css";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <div className="bg-black p-5 sticky flex  justify-center sm:justify-between w-full top-0 z-10">
      <nav className="  flex gap-6 text-xl text-white uppercase">
        <Link href="/">
          <a
            className={
              pathname === "/" ? styles.nav_link_active : styles.nav_link
            }
          >
            Inicio
          </a>
        </Link>
        {/* <Link href="/proyectos">
          <a
            className={
              pathname === "/proyectos"
                ? styles.nav_link_active
                : styles.nav_link
            }
          >
            Proyectos
          </a>
        </Link> */}
        <Link href="/contacto">
          <a
            className={
              pathname === "/contacto"
                ? styles.nav_link_active
                : styles.nav_link
            }
          >
            Contacto
          </a>
        </Link>
      </nav>

      <p className=" text-3xl text-white uppercase text-center p-2 hidden sm:block">
        Portfolio
      </p>
    </div>
  );
};

export default Header;
