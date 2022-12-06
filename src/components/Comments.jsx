import React, { useEffect } from "react";
import { useState } from "react";
import { getArticleComments } from "../api";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [commentsView, setCommentsView] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleComments(article_id).then((comments) => {
      setComments(comments);
      setLoading(false);
    });
  }, []);

  return (
    <div id="comments">
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

export default Comments;
