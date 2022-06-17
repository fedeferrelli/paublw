import React from "react";
import Image from "../assets/coverAbout_2.jpg";
import { Fade } from "react-awesome-reveal";

function Servicios() {

const servicios = ["¿Qué es el BLW?", "Beneficios del BLW", "Cómo comenzar", "Ofrecer alimentos", "Ambiente", "Arcadas y atragantamiento", "Alimentos a evitar", "Desde alimentación con papillas"  ]

  return (
    <main className="flex flex-col justify-center pb-2 bg-secondary/5">
     
      <h1 className="m-auto text-3xl tracking-tight font-extrabold text-secondary sm:text-5xl   mt-10">
        Servicios
      </h1>
      <Fade fraction="0" duration="1000" triggerOnce>
      <section className=" m-auto flex flex-col sm:flex-row sm:mt-10 ">
        
        <div className="w-full px-8 tracking-wider max-w-prose text-base text-gray-600 sm:text-lg md:text-xl text-center font-light">
           
          <p className="hidden sm:flex m-auto mt-3  sm:mt-5  sm:max-w-xl sm:mx-auto md:mt-5 ">
          Acompañamiento integral a padres, familiares, cuidadores, docentes, profesionales de niños que
deseen implementar el método BLW y transitar los primeros pasos de la alimentación
complementaria de forma segura, respetuosa y responsable.
          </p>

          <p className="m-auto mt-3  sm:mt-5  sm:max-w-xl sm:mx-auto md:mt-5 ">
          Las consultas pueden ser presenciales o virtuales. Asimismo, te quedará material para consultar permanentemente y siemppre podés contactarte nuevamente conmigo. 
          </p>
 

        </div>

        <div className="w-full sm:mt-0 mt-10 flex justify-center order-1 px-8">
         
          <div className="m-auto sm:h-auto sm:w-full flex flex-wrap gap-y-4">
           {servicios.map(servicio=>(
             <div key={servicio} className="w-auto bg-secondary/80 sm:hover:bg-secondary ease-in-out duration-300 px-3 py-2 rounded-full text-primary m-auto font-light shadow-md shadow-gray-600"> {servicio} </div>
           ))}
          </div>
          
        </div>
      </section>
      </Fade>
    </main>
  );
}

export default Servicios;
