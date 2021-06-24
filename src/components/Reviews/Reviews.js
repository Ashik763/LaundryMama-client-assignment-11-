import React, { useState } from "react";
import Review from "./Review/Review";
import first from "./first.jpg";
import second from "./second.jpg";
import third from "./third.jpg";
import fourth from "./fourth.jpg";

const Reviews = () => {
  const style = { backgroundColor: "#F6F6F6" };
  const [review,setReview] = useState([]);
  
  fetch("https://rocky-fortress-38643.herokuapp.com/showReview")
    .then((res) => res.json())
    .then((data) => {
      setReview(data);
    });

  const  reviewer = [
    {
      Name: "",
      description:
        "",
      img: first,
    },
    {
      Name: "",
      description:
        "",
      img: second,
    },
    {
      Name: "",
      description:
        "",
      img: third,
    },
    {
      Name: "",
      description:
        "",
      img: fourth,
    },
  ];
  return (
    <div style={style}>
      <div className="text-center">
        <h1 style={{ color: "dodgerblue" }}> Reviews </h1>
      </div>
      <div className="row ">
        {review.map((data) => (
          <Review data={data} id={data._id}  />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
