import React, { useState } from 'react';
import Ratings from './Ratings';

const Comment = ({ user, comment, showComments }) => {
    const [upVote, setUpVote] = useState(0);
    const [downVote, setDownVote] = useState(0);

    return (
        <div>
            {showComments
            ?   <div>
                <h3>{user}</h3>
                <p>{comment}</p>
                <Ratings upVote={upVote} setUpVote={setUpVote} downVote={downVote} setDownVote={setDownVote} />
                </div>
            :
                null
            }
        </div>
    );
};

export default Comment;