import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import VotesBar from "./VotesBar";

const Article = () => {
  const [article, setArticle] = useState({});
  const [votes, setVotes] = useState();

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
      setVotes(article.votes);
    });
  }, []);

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <VotesBar votes={votes}></VotesBar>
      <CommentForm></CommentForm>
      <Comments article_id={article_id}></Comments>
    </div>
  );
};

export default Article;
