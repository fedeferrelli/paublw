import React from 'react';
import { Fade } from 'react-awesome-reveal';
import opiniones from '../assets/contactIcons/utils/opiniones';

function Opiniones() {
    return (
        <main className="flex flex-col justify-center pb-20 bg-secondary/5 px-4">
     
        <Fade fraction="0" duration="1000" triggerOnce>
        
           
            <div className="m-auto sm:h-auto sm:w-full flex flex-wrap sm:flex-row justify-center gap-4">
   {opiniones.map(opinion=>(
               <div key={opinion.name} className="w-full  p-8 rounded-lg  sm:w-1/3 sm:w-max-[450px] shadow-gray-300 shadow-xl flex flex-col border-0 border-secondary"> 
               <h1 className="m-auto text-secondary font-bold">{opinion.names}</h1>
               <p className="tracking-wider max-w-prose text-base text-gray-600 sm:text-lg md:text-xl text-center font-light">{opinion.opinion}</p> 
               
               
               </div>
             ))} 
            </div>
            
          
        </Fade>
      </main>
    )
}

export default Opiniones
