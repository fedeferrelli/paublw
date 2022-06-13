import React from 'react'
import Image from '../assets/Pau.jpg'

function About() {
    return (
        <main className="bg-slate-100 flex flex-col justify-center pb-20">
            <div className="bg-secondary/10 w-full h-2"></div>
            <h1 className="m-auto text-3xl tracking-tight font-extrabold text-secondary sm:text-5xl border-b-4 pb-2 border-secondary/50 mt-10">Quien soy</h1>

            <section className="w-full flex flex-col sm:flex-row sm:mt-10">
                <div className="w-full order-2 sm:order-1">
           
            <p className="m-auto mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl text-center font-light">
            Mi nombre es Paula, comencé mi recorrido profesional estudiando psicología, en el año 2018 me
convertí en mamá de una hermosa pequeña. Mi tránsito por la maternidad ha generado muchos
interrogantes en mí, algunos de ellos trazaron el camino que me condujo hasta acá.
                  </p>
                  <p className="m-auto mt-3 text-base text-terciary sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl text-center font-light">
           
Estudié Psicología, orienté mi formación teórica hacia la clínica psicoanalítica con niños,
adolescentes y adultos.
Realicé mi formación acerca de la alimentación complementaria y BLW en la Escuela Argentina de
Baby Led Weaning.
                  </p>

                  </div>

                 <div className="w-full sm:mt-0 mt-10 ">
                     <div className="m-auto border-2 box-content border-secondary/75 rounded-full h-48 w-48 sm:h-72 sm:w-72 overflow-hidden sm:shadow-xl shadow-secondary/50">
            <img
              className="m-auto w-auto h-auto rounded-full object-cover"
              src={Image}
              alt="Image hero section"
            />
          </div> </div>
          </section>
        </main>
    )
}

export default About
