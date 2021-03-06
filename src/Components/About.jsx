import React from "react";
import Image from "../assets/coverAbout_1.jpg";
import { Fade } from "react-awesome-reveal";
import {Link} from 'react-scroll'

function About() {
  return (
    <main className="flex flex-col justify-center pb-4 bg-secondary/5" name='quien_soy'>
      {/*  <div className="bg-secondary/10 w-full h-2"></div> */}
      <h1 className="m-auto text-3xl tracking-tight font-extrabold text-secondary sm:text-5xl   mt-10">
        Quien soy
      </h1>
      <Fade triggerOnce>
      <section className="px-4 m-auto flex flex-col sm:flex-row sm:mt-10 ">
        
        <div className="w-full order-2 sm:order-1 tracking-wider max-w-prose text-base text-gray-600 sm:text-lg md:text-xl text-center font-light">
      
           
        <p className="m-auto mt-3  sm:mt-5  sm:max-w-xl sm:mx-auto md:mt-5 ">
            Mi nombre es Paula, comencé mi recorrido profesional estudiando
            psicología, en el año 2018 me convertí en mamá de una hermosa
            pequeña. Mi tránsito por la maternidad ha generado muchos
            interrogantes en mí, algunos de ellos trazaron el camino que me
            condujo hasta acá.
          </p>
          <p className="m-auto mt-3  sm:mt-5  sm:max-w-xl sm:mx-auto md:mt-5 ">
            Estudié Psicología, orienté mi formación teórica hacia la clínica
            psicoanalítica con niños, adolescentes y adultos. Realicé mi
            formación acerca de la alimentación complementaria y BLW en la
            Escuela Argentina de Baby Led Weaning.
          </p>

          <div className="rounded-md shadow mt-5 sm:w-1/2  m-auto">
                      <Link
                        to="contacto"
                        spy={true} 
                        smooth={true}
                        duration={1300}
                        className="w-full  flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-secondary/80 md:py-4 md:text-lg md:px-10 uppercase"
                      >
                        Contactame
                      </Link>
                    </div>

         
        </div>

        <div className="w-full sm:mt-0 mt-10 flex justify-center">
            
          <div className="m-auto w-48 sm:h-auto sm:w-2/3 overflow-hidden shadow-secondary/50 drop-shadow-4xl">
            <img
              className="m-auto w-auto h-auto rounded-full object-cover"
              src={Image}
              alt="Image hero section"
            />
          </div>
          
        </div>
      </section>
      </Fade>
      <div className="w-full h-48 sm:h-96 overflow-hidden relative mt-8  bg-cover">
        <img src="https://www.clinicalascondes.cl/getattachment/40c29ccd-793e-491b-9f5e-02f014aa067e/" alt="food blw" className="w-full absolute sm:-mt-20"></img>
      </div>
    </main>
  );
}

export default About;
