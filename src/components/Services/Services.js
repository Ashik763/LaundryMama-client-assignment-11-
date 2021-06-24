import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dry from './dry-clean.jpg';
import gowns from './wedding gowns.jpg';
import curtain from './curtain.jpg';
import ServiceInfo from './ServiceInfo/ServiceInfo';
import { useState } from 'react';


const Services = (e) => {
    const [service,setService] = useState([]);

    fetch('https://rocky-fortress-38643.herokuapp.com/showService')
    .then(res => res.json())
    .then(data => setService(data))
   


//     const servicesInfo = [
//         {
//         title: '', 
//         description: '', 
//         img: dry
//     },
//         {
//         title: '', 
//         description: '', 
//         img: gowns
//     },
//         {
//         title: '', 
//         description: '', 
//         img: curtain
//     }
// ]
    return (
        <div className="text-center">   
        <div className='text-center ml-5'> 
         <h4 style={{opacity:0.5}}>  We Clean Everything! </h4> 
         <h1>Always the <b className='btn-success'>Best Service</b> </h1>
        </div>
        <div className="row ">

            {
                service.map(data => <ServiceInfo service={data} id={data._id} />)
            }



      

         </div>
    
     

        </div>
    
        
    );
};

export default Services;