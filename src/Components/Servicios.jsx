import React from "react";
import Image from "../assets/coverAbout_2.jpg";
import { Fade } from "react-awesome-reveal";

function Servicios() {

const servicios = ["¿Qué es el BLW?", "Beneficios del BLW", "Criterios para comenzar", "Cómo ofrecer los alimentos", "Condiciones generales del ambiente", "Arcadas y atragantamiento", "Alimentos a evitar antes del año", "Transición desde alimentación con papillas"  ]

  return (
    <main className="flex flex-col justify-center pb-20 bg-secondary/5">
     
      <h1 className="m-auto text-3xl tracking-tight font-extrabold text-secondary sm:text-5xl   mt-10">
        Servicios
      </h1>
      <Fade direction="up" fraction="0" duration="1000" triggerOnce>
      <section className="w-11/12 m-auto flex flex-col sm:flex-row sm:mt-10 ">
        
        <div className="w-full">
           
          <p className="m-auto mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl text-center font-light">
          Acompañamiento integral a padres, familiares, cuidadores, docentes, profesionales de niños que
deseen implementar el método BLW y transitar los primeros pasos de la alimentación
complementaria de forma segura, respetuosa y responsable.
          </p>
 

        </div>

        <div className="w-full sm:mt-0 mt-10 flex justify-center order-1 ">
         
          <div className="m-autosm:h-auto sm:w-full  flex flex-wrap gap-y-4">
           {servicios.map(servicio=>(
             <div key={servicio} className="bg-secondary/80 sm:hover:bg-secondary ease-in-out duration-300 px-4 py-2 rounded-full text-primary m-auto font-light shadow-md shadow-gray-600"> {servicio} </div>
           ))}
          </div>
          
        </div>
      </section>
      </Fade>
    </main>
  );
}

export default Servicios;
