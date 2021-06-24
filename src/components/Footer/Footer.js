import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Card';

const Footer = () => {
    const style = {color: 'white',opacity:'0.7'};
    return (
        <section className= "text-center"> 

            <div style={{ backgroundColor: '#48474D'}} className="row text-center" > 
              
                <div style={style} className="col-md-3 m-5" > 
                <h3>  OUR CEO'S STATEMENT </h3>
                <br/>
                <small> Fashion is not something that exists only in dresses. It exists in people who are well dressed in clean crisp clothes. Therefore, make your fashion statement with Dry Cleaners!  </small>
                
                
                </div>
                <div style={style}  className="col-md-3 m-5"> 

                <h2> Quick Links</h2>
                
                <ul>  
                    <li>Stream Ironing   </li>
                    <li>Dry Cleaning  </li>
                    <li>Stain Removal  </li>
                    <li> Commercial Laudry </li>
                    <li> Silk Suede </li>
                    <li> Wet washing </li>
                    <li> Drapery Clenaing </li>
                </ul>
                
                
                </div>
                <div style={style}  className="col-md-3 m-5" >
                <h3> NEWSLETTER SIGN UP </h3>
                <h6> If you want receive our all weekly updates about new offers and discount, signup below.</h6>    
                    
                    <input style={{width:'80%',height: '40px'}} placeholder="email" type="email"/>
                    <button><FontAwesomeIcon  style ={{fontSize:'20px',color:'dodgerblue'}} icon={faPaperPlane} /></button>
                 </div>
                
            
             </div>
            <div style={{ backgroundColor: '#23BCFF'}} > 
            
             <small className="text-center m-3"> © 2017 Dry Cleaning. All rights reserved. Design by AGThemes</small> 
             </div>
          

        </section>
         
       
    );
};

export default Footer;