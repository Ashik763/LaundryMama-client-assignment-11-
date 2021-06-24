import React from "react";
import Blog from "./Blog/Blog";

const Blogs = () => {
  const Blogs = [
    {
      title: "Wedding suit deserves special treatment",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus...",
    },
    {
      title: " Power laundry service at its best!",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus...",
    },
    {
      title: "Dry cleaning saves money in the long run ",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus...",
    },
  ];
  return (
    <div>
      <div className = " text-center">
      Our <h1><b> Blog  </b> </h1>
      </div>
      <div className="row ">
        {
            Blogs.map( data =>  <Blog  data = {data} />)
        }

      </div>
    </div>
  );
};

export default Blogs;
