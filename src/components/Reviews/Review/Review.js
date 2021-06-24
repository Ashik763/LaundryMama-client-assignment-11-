
import React from 'react';
import Card from 'react-bootstrap/Card';

const Review = ({data,id}) => {

    return (
        <Card className="col-md-3 m-5" style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={data._id}/> */}
        <Card.Body>
          <Card.Title>  
            {data.name}    </Card.Title>
          <Card.Text>
          {data.description}
          </Card.Text>
        
        </Card.Body>
        
      </Card>
    );
};

export default Review;