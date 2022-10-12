import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const SingleTopic = ({ topic }) => {
    console.log(topic);
    return (
        <div>

            <Col className='mt-5 text-white'>
                <Card className='bg-dark'>
                    <Card.Img variant="top" style={{ height: "200px", width: '200px' }} src={topic.logo} />
                    <Card.Body >
                        <Card.Title>{topic.name}</Card.Title>
                        <Card.Text>
                            Total Question: {topic.total}
                        </Card.Text>
                    </Card.Body>
                    <Button>start quiz</Button>
                </Card>

            </Col>


        </div>
    );
};

export default SingleTopic;