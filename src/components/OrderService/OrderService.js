import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderServiceInfo from './OrderServiceInfo/OrderServiceInfo';

const OrderService = () => {
    const {id} = useParams();
    const [serviceDetail,setServiceDetail] = useState([])
    useEffect(() => {
        fetch(`https://rocky-fortress-38643.herokuapp.com/OrderService/${id}`)
        .then(res => res.json())
        .then((data) => {
          setServiceDetail(data);
        //   console.log(data);
        });

     },[])
    
    
   
 
    return (
        <div>
           {serviceDetail.map( data => <OrderServiceInfo data = {data}/> )}
           
        </div>
    );
};

export default OrderService;