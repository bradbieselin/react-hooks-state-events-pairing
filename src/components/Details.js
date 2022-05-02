import React, {useState} from 'react';
import Info from './Info';
import Ratings from './Ratings';

const Details = ({ title, views, createdAt, upvotes, downvotes }) => {
    const [upVote, setUpVote] = useState(upvotes);
    const [downVote, setDownVote] = useState(downvotes);

    return (
    <div>
        <Info title={title} views={views} createdAt={createdAt} />
        <Ratings upVote={upVote} setUpVote={setUpVote} downVote={downVote} setDownVote={setDownVote} />
    </div>
    );
};

export default Details;