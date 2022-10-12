import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleTopic = ({ topic }) => {
    console.log(topic);
    const { id, logo, name, total } = topic;
    return (
        <div>

            <Col className='text-white'>
                <Card className='bg-dark'>
                    <Card.Img variant="top" style={{ height: "200px", width: '200px' }} src={logo} />
                    <Card.Body >
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Total Question: {total}
                        </Card.Text>
                    </Card.Body>

                    <Link to={`/quiz/${id}`} > <Button>start quiz</Button> </Link>

                </Card>

            </Col>


        </div>
    );
};

export default SingleTopic;