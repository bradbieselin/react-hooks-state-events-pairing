import React from 'react';
import Comment from './Comment';

const Comments = ({ comments, showComments }) => {
    return (
        <div>
            {comments.map((comment) => <Comment user={comment.user} comment={comment.comment} key={comment.id} showComments={showComments} />)}
        </div>
    );
};

export default Comments;