import React, {useState} from 'react';
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import Image from '../assets/herosection.webp'
import {Link} from 'react-scroll'

function HeroSection() {

    const navigation = [
        { name: "Quien Soy", to: "quien_soy", duration: 800 },
        { name: "Servicios", to: "servicios", duration: 1300 },
        { name: "Opiniones", to: "opiniones", duration: 1500 },
        { name: "Contacto", to: "contacto", duration: 1800 },
      ];

      const [showMenu, setShowMenu] = useState(false)

      return (
        <div className="relative overflow-hidden w-full shadow-lg sm:h-screen sm:max-h-[750px]" >
          <div className="max-w-7xl mx-auto">
            <div
              /*Parte texto Hero & Poligono*/ className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-primary sm:h-screen sm:max-h-[750px] ">
              <svg
                /* poligono */ className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-primary transform translate-x-1/2 "
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
    
              <section /* NavBar big screen */ className="">
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div /* Logos */ className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-right w-full md:w-auto">
                {/*         <a href="https://portafolio-fedeferrelli.vercel.app/">
                          <img
                            alt="Workflow"
                            className="h-8 w-auto sm:h-10"
                            src={Logo}
                          />
                        </a> */}
                        <div className="flex justify-end w-full md:hidden">
                          <button className="bg-primary rounded-md p-2 inline-flex items-center mr-0  text-terciary/90 hover:text-terciary hover:bg-terciary/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary/50 text-xl">
                            <span className="sr-only">Open main menu</span>
                            <GiHamburgerMenu onClick={()=>setShowMenu(true)}/>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-0 md:pr-4 md:space-x-8 text-lg">
                      {navigation.map((item) => (
                        <Link
                        key={item.name}
                        to={item.to} 
                        spy={true} 
                        smooth={true} 
                        duration={item.duration}
                        className="font-medium text-terciary cursor-pointer hover:text-terciary/80"
                        >
                          {item.name}
                        </Link>
                      ))}
                  
                    </div>
                  </nav>
                </div>
    
    {  
    
    /* NavBar en mobile */
     showMenu &&
    
    <div className="" onClick={()=> setShowMenu(false)} >

                  <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-md bg-primary ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="px-5 pt-4 flex items-center justify-end ">
                {/*         <div>
                          <img
                            className="h-8 w-auto"
                            src={Logo}
                            alt="logo image"
                          />
                        </div> */}
                        <div className="-mr-2">
                          <button className="bg-primary rounded-md p-2 inline-flex items-center justify-center text-terciary/90 hover:text-terciary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                            <span className="sr-only">Close main menu</span>
                            <AiOutlineCloseCircle className="h-8 w-8" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          
                        <Link
                        key={item.name}
                        to={item.to} 
                        spy={true} 
                        smooth={true} 
                        duration={item.duration}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        onClick={()=> setShowMenu(false)}
                        >
                          {item.name}
                        </Link>
                        ))}
                      </div>
                     
                    </div>
                  </div>
                </div>}
              </section>
    
              <main /* Texto del hero section */className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block ">Pau Fuster</span>{" "}
                    <span className="block text-secondary xl:inline">
                      Baby Led Weaning
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-terciary sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Bienvenida a mi página web. <span className="block">Acá podés encontrar todo lo que
                    tengo para ayudarte</span> 
                  </p>

                  <p className="sm:hidden mt-3 text-base text-terciary sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Acompañamiento integral a padres, familiares, cuidadores, docentes, profesionales de niños que
deseen implementar el método BLW y transitar los primeros pasos de la alimentación
complementaria de forma segura, respetuosa y responsable.
          </p>







                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">

                      <Link
                        to="contacto"
                        spy={true}
                        smooth={true}
                        duration={1800}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-secondary/80 md:py-4 md:text-lg md:px-10 uppercase"
                      >
                        Contactame
                      </Link>
                    </div>
   
                  </div>
                </div>
              </main>
            </div>
          </div>
    
          {/* Imagen */}
    
          <div className="lg:absolute -z-10 lg:inset-y-0 lg:right-0 lg:w-1/2 hidden sm:flex">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={Image}
              alt="Image hero section"
            />
          </div>
        </div>

        
      );

      
}

export default HeroSection
