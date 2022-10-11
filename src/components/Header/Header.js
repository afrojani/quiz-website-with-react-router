import React from 'react';
import { Card } from 'react-bootstrap';
import logo from '../../images/header image.jpeg'
const Header = () => {
    return (
        <div>

            <Card className="container text-white text-center">
                <Card.Img style={{ height: "300px" }} src={logo} alt="Card image" />
                <Card.ImgOverlay className='bg-dark bg-opacity-50'>
                    <Card.Title as='h2'>Check your Programming skill.</Card.Title>
                    <Card.Text as='h6'>
                        You can evaluate your software knowledge with us by giving the quizes on our different topics.
                    </Card.Text>

                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Header;