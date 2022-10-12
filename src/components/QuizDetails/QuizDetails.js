import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quizData = useLoaderData();
    const { name, questions } = quizData.data
    // console.log(quizData);
    return (
        <div className='text-center'>
            <h2>Quiz of {name}</h2>
            <Row sm={1} md={2} className="g-4">
                {
                    questions.map(questionData => <Question
                        key={questionData.id}
                        questionData={questionData}

                    ></Question>)
                }
            </Row>
        </div>
    );
};

export default QuizDetails;