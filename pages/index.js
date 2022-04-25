import Image from "next/image";
import BioSection from "../components/BioSection";
import Conocimiento from "../components/Conocimiento";
import MainHeader from "../components/MainHeader";
import Section from "../components/Section";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="w-full">
      <MainHeader />
      <main className="max-w-6xl min-w-[400px] w-3/5 mx-auto mb-10 bg-white bg-opacity-40 backdrop-blur-md p-3 rounded-b">
        <div className="flex p-8 flex-col-reverse gap-4 lg:flex-row ">
          <div className="basis-3/5 m-auto text-center lg:text-left">
            <h1 className="text-6xl font-bold mb-10">Carlos Castro</h1>
            <a
              className="p-5 bg-red-700 text-white rounded uppercase font-bold cursor-pointer hover:bg-cyan-100 transition-colors"
              download
              href="CV - Carlos Castro.pdf"
            >
              Descargar CV
            </a>
          </div>
          <img
            src="/static/perfil.jpeg"
            width="150"
            height="150"
            alt="Perfil"
            className="rounded-full block border-white border-8 mx-auto basis-2/5"
          />
        </div>
        <div className="p-8">
          <Section title={"Sobre mi"}>
            <p className="leading-6 text-lg">
              Carlos es una persona proactiva y perseverante ante cualquier
              problema, que esta en búsqueda de mejores oportunidades
              profesionales. En este momento se encuentra mejorando sus
              habilidades en el desarrollo web y para poder insertarse en un
              ambiente laboral para poder armar una carrera entorno a los
              conocimientos que esta y seguira adquiriendo.
            </p>
          </Section>

          <Section title={"Mis estudios"}>
            <BioSection
              year="2017"
              description="Termine el secundario en Instituo del Libertador"
            />
            <BioSection
              year="2017"
              description="Termine ingles en el Liceo Cultural Brítanico"
            />
            <BioSection
              year="2021"
              description="Termine la Tecnicatura Universitaria en programación en la UTN
                FRA"
            />
            <BioSection
              year="2022"
              description="Empecé la Tecnicatura Universitaria en sistemas de información"
            />
          </Section>
          <Section title={"Conocimientos"}>
            <div className="grid grid-cols-2  lg:grid-cols-4">
              <Conocimiento
                img="/static/iconos/js.png"
                description="JavaScript"
              />
              <Conocimiento
                img="/static/iconos/ts.png"
                description="Typescript"
              />
              <Conocimiento
                img="/static/iconos/bootstrap.svg"
                description="Bootstrap"
              />
              <Conocimiento img="/static/iconos/html.png" description="HTML" />
              <Conocimiento img="/static/iconos/css.png" description="CSS" />
              <Conocimiento
                img="/static/iconos/react.svg"
                description="React"
              />
              <Conocimiento
                img="/static/iconos/tailwindcss.svg"
                description="Tailwind "
              />
              <Conocimiento
                img="/static/iconos/express.svg"
                description="Express"
              />
              <Conocimiento img="/static/iconos/sql.png" description="SQL" />
              <Conocimiento
                img="/static/iconos/mongo.svg"
                description="MongoDB"
              />
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
}
