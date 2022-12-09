import React, { useEffect } from "react";
import { useState } from "react";
import { getArticleComments } from "../api";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleComments(article_id).then((comments) => {
      setComments(comments);
      setLoading(false);
    });
  }, []);

  return (
    <div id="comments">
      <CommentForm
        setLoading={setLoading}
        comments={comments}
        setComments={setComments}
        article_id={article_id}
      ></CommentForm>
      <CommentList
        loading={loading}
        comments={comments}
        setComments={setComments}
      ></CommentList>
    </div>
  );
};

export default Comments;
