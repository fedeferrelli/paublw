import React from 'react';
import { Fade } from 'react-awesome-reveal';
import opiniones from '../assets/contactIcons/utils/opiniones';

function Opiniones() {
    return (
        <main className="flex flex-col justify-center pb-20 bg-secondary/5 px-4">
     
        <Fade fraction="0" duration="1000" triggerOnce>
        
           
            <div className="m-auto sm:h-auto sm:w-full flex flex-wrap sm:flex-row justify-center gap-4 ">
   {opiniones.map(opinion=>(
               <div key={opinion.name} className="w-full  py-6 px-2 rounded-lg  sm:w-1/3 sm:w-max-[450px]   shadow-lg shadow-terciary border border-terciary/20 flex flex-col "> 
               <h1 className="m-auto text-secondary font-bold sm:text-lg md:text-xl">{opinion.names}</h1>
               <p className="mt-2 tracking-wider max-w-prose text-base text-gray-600 sm:text-lg md:text-xl text-center font-light">{opinion.opinion}</p> 
               
               
               </div>
             ))} 
            </div>
            
          
        </Fade>
      </main>
    )
}

export default Opiniones
