import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
      fetch('https://rocky-fortress-38643.herokuapp.com/addService',{
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(success => {
        if(success){
          alert('Your service successfully added!');
        }
      }  )
      // console.log(data);
     
    };
    return (
        <div>
        <div className="m-5">
            <h3 className='text-center' style={{color: 'dodgerblue'}}> Add New Service here!! </h3>
          <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                style={{ width: "200px" }}
                className="form-control  m-2"
                name="name"
                placeholder="Service Name"
                {...register("name")}
              />{" "}
              <br />
              <input
                style={{ width: "40%", height: "120px" }}
                className="form-control m-2"
                name="description"
                placeholder="Service-description"
                {...register("description")}
              />
              <input
                // style={{ width: "40%", height: "120px" }}
                className="form-control m-2"
                type='text'
               name='price'
               placeholder="Service-price"
                {...register("price")}
              />
            </div>
  
            <input  className="form-control btn btn-info" type="submit" />
          </form>
        </div>
      </div>
    );
};

export default AddService;