import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { deleteComment } from "../api";
import { UserContext } from "../contexts/Contexts";

const CommentList = ({ comments, setComments, loading }) => {
  const [commentsView, setCommentsView] = useState(false);
  const [deletedComments, setDeletedComments] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState({
    comment_id: null,
    deleting: false,
    message: "",
  });
  const { user } = useContext(UserContext);

  const handleDelete = (comment_id) => {
    setDeleteStatus({
      deleting: true,
      comment_id: comment_id,
      message: "Deleting comment...",
    });
    deleteComment(comment_id)
      .then(() => {
        setDeletedComments((currDeletedComments) => {
          return [...currDeletedComments, comment_id];
        });
        setDeleteStatus({ comment_id: null, deleting: false, message: "" });
      })
      .catch((err) => {
        setDeleteStatus({
          deleting: false,
          comment_id: comment_id,
          message: "Server Error: Comment was not deleted",
        });
      });
  };

  return (
    <div id="comments_list">
      <p>Comments List Placeholder</p>
      {comments ? (
        <button
          onClick={() =>
            setCommentsView((currCommentsView) => {
              return !currCommentsView;
            })
          }
          disabled={loading}
        >
          {loading ? "Loading Comments" : "Show / Hide Comments"}
        </button>
      ) : (
        <p>No comments here yet, be the first to leave a comment!</p>
      )}

      {commentsView
        ? comments.map((comment) => {
            return (
              <div className="comment" key={comment.comment_id}>
                {deletedComments.includes(comment.comment_id) ? (
                  <div>
                    <p>Comment Deleted.</p>
                  </div>
                ) : (
                  <div className="">
                    <p>{comment.body}</p>
                    <p>Votes: {comment.votes}</p>
                    <p>User: {comment.author}</p>
                    <p>Posted: {new Date(comment.created_at).toUTCString()}</p>
                  </div>
                )}
                {user === comment.author &&
                !deletedComments.includes(comment.comment_id) ? (
                  <input
                    type="button"
                    value="delete"
                    disabled={deleteStatus.deleting}
                    onClick={() => {
                      handleDelete(comment.comment_id);
                    }}
                  ></input>
                ) : null}
                {deleteStatus.message &&
                deleteStatus.comment_id === comment.comment_id ? (
                  <p>{deleteStatus.message}</p>
                ) : null}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default CommentList;
