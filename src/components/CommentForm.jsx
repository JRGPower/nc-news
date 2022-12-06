import React from "react";

const CommentForm = () => {
  const handleSubmit = () => {};

  return (
    <form onSubmit={() => handleSubmit()} id="comment-form">
      <label htmlFor="comment-box">CommentForm Placeholder</label>
      <textarea id="comment-box" rows="4" />
      <input type="submit"></input>
    </form>
  );
};

export default CommentForm;
