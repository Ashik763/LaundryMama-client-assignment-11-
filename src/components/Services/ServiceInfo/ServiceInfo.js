import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';

import React from 'react';
import Card from 'react-bootstrap/Card';
// import dry from './dry-clean.jpg';
// import gowns from './wedding gowns.jpg';
// import curtain from './curtain.jpg';

const ServiceInfo = ({service,id}) => {
  const history = useHistory();
  const showDetails = (id) =>{
    const url = `/OrderService/${id}`;
    history.push(url);
    console.log(id);
    // console.log(service);
    fetch(`https://rocky-fortress-38643.herokuapp.com/OrderService/${id}`,{
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(service)
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        alert('Your review successfully posted!');
      }
    }  )
  }
    return (
        <Card className="col-md-3 m-5" style={{ width: '18rem' }}>
        <Card.Text style={{color:'CadetBlue',fontSize:'30px'}}>
         Price:$  {service.price}
          </Card.Text>
        <Card.Body>
          <Card.Title>  
            {service.name}    </Card.Title>
          <Card.Text>
          {service.description}
          </Card.Text>
          <Button onClick={() => showDetails(id)}  variant="primary">Take Service</Button>
          {/* <Link to=" /OrderService/${id}"  variant="primary">Take Service</Link> */}
        </Card.Body>

      </Card>
    );
};

export default ServiceInfo;