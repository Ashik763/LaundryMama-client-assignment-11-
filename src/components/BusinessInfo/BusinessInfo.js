import React from "react";
import InfoCard from "../InfoCard/InfoCard";

import {
  faTshirt,
  faTruck,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";

const BusinessInfo = () => {
  const infosData = [
    {
      id:1,
      title: "WE PICK YOUR CLOTHES",
      description:
        "The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!",
      icon: faTshirt,
      background: "primary"
    },
    {
      id:2,
      title: "QUICKER DELIVERY",
      description:
        "We ensure delivery in the quickest of the turnaround time in the industry. Superior quality of service with speed!",
      icon: faTruck,
      background: "primary"
    },
    {
      id:3,
      title: "DELIVERY at the DOORSTEP!",
      description:
        "We have pioneered the concept of pickup and delivery in the shortest possible time. We intend keeping it that way!",
      icon: faHouseUser,
      background: "primary"
    }
  ];

  return (
    <section className="m-5">
      <div className="text-center">
        <h3> Clean Job Always!</h3>
        <p>
          
          This is <b>How we work </b>{" "}
        </p>
      </div>
      <div className="row">
        {infosData.map((data) => (
          <InfoCard info={data}> </InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
