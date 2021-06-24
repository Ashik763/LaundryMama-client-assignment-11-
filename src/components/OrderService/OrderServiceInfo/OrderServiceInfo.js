import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import { useForm } from 'react-hook-form';

const OrderServiceInfo = ({data}) => {
    const { register, handleSubmit, errors } = useForm();

    const [userInfo,setUserInfo] = useState({});
    const onSubmit = (data) => {
        console.log(data);
        setUserInfo(data);
   
      
     
       
      };
   
    
    return (
        <div style={{backgroundColor:'gainsboro'}} >   
        <div  style={{backgroundColor:'aliceblue',width:'100%',height:'100%'}}>
          <div className='text-center m-3 p-3'style={{fontSize:'40px'}} > Service Name: <b style={{color:'cyan'}}> {data.name}  </b> </div> 
          <div className='text-center m-3 p-3'  style={{fontSize:'30px'}} > Price: <b> ${data.price} </b>  </div>
        </div>
        <div className='row'>
        <div className='text-center col-md-4 col-sm-12'>
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              style={{ width: "90%" }}
              className="form-control  m-2"
              name="email"
              placeholder="Email"
              {...register("email")}
            />
            <br />
            <input
              style={{ width: "90%" }}
              className="form-control m-2"
              name="name"
              placeholder="Name"
              {...register("name")}
              required
            />
            <br/>
            <input
              style={{ width: "90%" }}
              className="form-control  m-2"
              name="address"
              placeholder="Adress"
              {...register("address")}
            />
            <br />
            <input
             style={{ width: "90%" }}
              className="form-control  m-2"
              name="phone"
              placeholder="Mobile number"
              {...register("phone")}
              required
            />
            <br />
        
          </div>

          <input  className="form-control btn btn-info" type="submit" />
        </form>
       
        </div>
        <div className='col-md-4 text-center col-sm-12 pl-5'>  
       
        {/* <ProcessPayment> </ProcessPayment>< */}
        <ProcessPayment userInfo={userInfo}>  </ProcessPayment>
        {/* <Button> Pay here: </Button> */}

        </div>
        </div>
        </div>
    );
};

export default OrderServiceInfo;