import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './InfoCard.css';


const InfoCard = ({ info }) => {
 
  return (
    <div  id="icon-div" className="col-md-3 m-5">
      <div id="icon" className='text-center'>
      <FontAwesomeIcon style={{fontSize:'50px'}} icon={info.icon} />
      </div>
      <div>
         <h3> {info.title} </h3> 
          <h6 style={{opacity:'.5'}}> {info.description} </h6> 
      </div>
    </div>
  );
};

export default InfoCard;
