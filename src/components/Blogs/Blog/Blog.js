import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Blog = ({data}) => {
    // console.log(data);
    return (
        <Card className="col-md-3 m-5" style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={data.img}/> */}
        <Card.Body>
          <Card.Title>  
            {data.title}    </Card.Title>
          <Card.Text>
          {data.description}
          </Card.Text>
          <Button> Continue reading ... </Button>
        </Card.Body>
      </Card>
    );
};

export default Blog;