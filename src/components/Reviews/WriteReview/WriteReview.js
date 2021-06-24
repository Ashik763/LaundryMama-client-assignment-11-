import React,{useState} from "react";

import { useForm } from "react-hook-form";

const WriteReview = () => {
  // const [review,setReview] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    fetch('https://rocky-fortress-38643.herokuapp.com/addReview',{
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        alert('Your review successfully posted!');
      }
    }  )
  
 
   
  };
 
  return (
    <div>
      <div className="m-5">
          <h3 className='text-center' style={{color: 'dodgerblue'}}> Write your REVIEW here!! </h3>
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              style={{ width: "200px" }}
              className="form-control  m-2"
              name="name"
              placeholder="Name"
              {...register("name")}
            />{" "}
            <br />
            <input
              style={{ width: "40%", height: "120px" }}
              className="form-control m-2"
              name="description"
              placeholder="description"
              {...register("description")}
            />
          </div>

          <input  className="form-control btn btn-info" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default WriteReview;
