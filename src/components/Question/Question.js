import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Form } from 'react-bootstrap';

const Question = ({ questionData }) => {
    console.log(questionData);
    const { question, options, correctAnswer } = questionData;
    const strQuestion = question.split('<p>');
    const strQuestion2 = strQuestion[1].split('</p>');


    const showToastSuccessMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };


    const showToastErrorMessage = () => {
        toast.error('Error Notification !', {
            position: toast.POSITION.TOP_LEFT
        });
    };


    const selectOption = (e) => {
        console.log(e.target.innerText);
        let selectedOption = e.target.innerText;
        if (selectedOption === correctAnswer) {
            showToastSuccessMessage()
        }
        else { showToastErrorMessage() }
    }



    return (
        <div>
            <Card style={{ width: '30rem' }} className="mb-2 bg-light p-2">
                <Card.Header>{strQuestion2}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Form className='ms-4'>
                            {options.map((type) => (
                                <div key={type} className="mb-3 bg-info p-2 rounded-3">
                                    <Form.Check type='radio' id={`check-api-${type}`}>
                                        <Form.Check.Input type={type} isValid />
                                        <span>
                                            <Form.Check.Label onClick={selectOption} className='text-dark fw-bold' >{type}</Form.Check.Label>
                                            <ToastContainer />
                                        </span>
                                    </Form.Check>
                                </div>
                            ))}
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Question;