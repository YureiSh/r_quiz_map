'use client';

import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';



const Begin = () => {
  const [point, setPoint] = useState(0);
  return (
    <section className="d-flex justify-content-center align-items-center bg-blue-500" style={{ height: '100vh' }}>
      <Card style={{ width: '24rem', height:'18rem' }}>
        <Card.Body>
          <div className="mb-2 justify-items-center">
          <Card.Title>Welcome</Card.Title>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Begin;
