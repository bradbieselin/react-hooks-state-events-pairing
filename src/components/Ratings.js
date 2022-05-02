import React from 'react';

const Ratings = ({ upVote, setUpVote, downVote, setDownVote }) => {

    return (
        <div>
            <button onClick={() => setUpVote(upVote + 1)}>{upVote + "👍"}</button>
            <button onClick={() => setDownVote(downVote + 1)}>{downVote + "👎"}</button>
        </div>
    );
};

export default Ratings;