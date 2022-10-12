import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import SingleTopic from '../singleTopic/SingleTopic';

const Topics = () => {
    const topics = useLoaderData();
    const individualTopics = topics.data;
    return (
        <div>
            <Header></Header>

            <Row sm={1} md={2} className="g-4">
                {
                    individualTopics.map(topic => <SingleTopic
                        key={topic.id}
                        topic={topic}

                    ></SingleTopic>)
                }
            </Row>
        </div>

    );
};

export default Topics;