import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import Comments from "./Comments";
import VotesBar from "./VotesBar";

const Article = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    message: "",
  });
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setLoading(false);
      })
      .catch((err) => {
        setError({
          message: "Article not found",
        });
      });
  }, []);

  return (
    <div id="articleWrapper">
      {error.message || loading ? (
        <p>{error.message}</p>
      ) : (
        <div id="articleComponents">
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <VotesBar article={article}></VotesBar>
          <Comments article_id={article_id}></Comments>
        </div>
      )}
    </div>
  );
};

export default Article;
