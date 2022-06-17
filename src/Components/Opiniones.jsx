import React from 'react';
import { Fade } from 'react-awesome-reveal';
import opiniones from '../assets/contactIcons/utils/opiniones';

function Opiniones() {
    return (
        <main className="flex flex-col justify-center pb-2 bg-secondary/5">
     
        <Fade fraction="0" duration="1000" triggerOnce>
        
           
            <div className="m-auto sm:h-auto sm:w-full flex flex-wrap justify-center p-4">
   {opiniones.map(opinion=>(
       <div key={opinion.name} className="w-full  py-6 rounded-lg justify-center sm:w-1/2 sm:w-max-[450px] ">
               <div  className="m-auto w-full px-2 sm:h-[250px] max-w-[450px] py-6 rounded-lg  sm:w-max-[450px]  shadow-lg  flex flex-col border border-terciary/15"> 
               <h1 className="m-auto text-secondary font-bold sm:text-lg md:text-xl">{opinion.names}</h1>
               <p className="mt-2 tracking-wider max-w-prose text-base text-gray-600 sm:text-lg md:text-xl text-center font-light">{opinion.opinion}</p> 
               
               </div>
               </div>
             ))} 
            </div>
            
          
        </Fade>
      </main>
    )
}

export default Opiniones
