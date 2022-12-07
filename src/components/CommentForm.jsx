import React from "react";
import { useState } from "react";
import { postComment } from "../api";

const CommentForm = ({ setLoading, comments, setComments, article_id }) => {
  const [commentFormView, setCommentFormView] = useState(false);
  const [commentForm, setCommentForm] = useState({
    username: "",
    body: "",
  });
  const [commentValidation, setCommentValidation] = useState({
    posted: false,
    message: "",
  });

  const handleReset = (event) => {
    event.preventDefault();
    setCommentForm({
      username: "",
      body: "",
    });
    setCommentValidation({
      posted: false,
      message: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!commentForm.body || !commentForm.username) {
      setCommentValidation({
        posted: false,
        message: "make sure the comment and username are both completed",
      });
      return;
    }
    setCommentValidation({
      posted: true,
      message: "Posting comment... please wait",
    });
    postComment(article_id, commentForm)
      .then((comment) => {
        console.log(comment, "");
        setCommentValidation({
          posted: true,
          message: "Comment posted successfully",
        });
        setCommentForm({
          username: "",
          body: "",
        });
        setComments((currComments) => {
          return [comment, ...currComments];
        });
      })
      .catch((err) => {
        setCommentValidation({
          posted: false,
          message:
            "Problem encountered trying to post comment, ensure username is correct",
        });
        console.log("");
      });
  };

  return (
    <div>
      <button onClick={() => setCommentFormView(!commentFormView)}>
        Show / Hide Comment Form
      </button>
      {commentFormView ? (
        <form
          onSubmit={(event) => handleSubmit(event)}
          onReset={(event) => handleReset(event)}
          id="comment-form"
        >
          <label htmlFor="comment-box">Comment*</label>
          <textarea
            id="comment-box"
            rows="4"
            value={commentForm.body}
            onChange={(e) =>
              setCommentForm({ ...commentForm, body: e.target.value })
            }
          />

          <label htmlFor="username">Username*</label>
          <input
            id="username"
            type="text"
            value={commentForm.username}
            onChange={(e) =>
              setCommentForm({ ...commentForm, username: e.target.value })
            }
          ></input>
          <br />

          <input type="submit" disabled={commentValidation.posted}></input>
          <br />
          <input type="reset" disabled={commentValidation.posted}></input>
          {commentValidation.message ? (
            <p>{commentValidation.message}</p>
          ) : null}
          <p>Required Fields* -- placeholder</p>
        </form>
      ) : null}
    </div>
  );
};

export default CommentForm;
