import React from "react";
import { useState } from "react";

const CommentList = ({ comments, loading }) => {
  const [commentsView, setCommentsView] = useState(false);

  return (
    <div>
      <p>Comments List Placeholder</p>
      <button onClick={() => setCommentsView(!commentsView)} disabled={loading}>
        {loading ? "Loading Comments" : "Show / Hide Comments"}
      </button>
      {!comments ? (
        <p>No comments here yet, be the first to leave a comment!</p>
      ) : commentsView ? (
        comments.map((comment) => {
          return (
            <div className="comment" key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
              <p>User: {comment.author}</p>
              <p>Posted: {new Date(comment.created_at).toUTCString()}</p>
            </div>
          );
        })
      ) : null}
    </div>
  );
};

export default CommentList;
