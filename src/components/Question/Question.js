import React from 'react';
import { Form } from 'react-bootstrap';

const Question = ({ questionData }) => {
    // console.log(questionData);
    const { question, options } = questionData;
    const strQuestion = question.split('<p>');
    const strQuestion2 = strQuestion[1].split('</p>');
    return (
        <div className='border border-danger rounded-3 p-2'>
            <h5>{strQuestion2}</h5>
            {
                options.map(selectOption => <div>
                    <Form.Check type="radio" aria-label="radio 1" /><span>{selectOption}</span>
                </div>)
            }
        </div>
    );
};

export default Question;