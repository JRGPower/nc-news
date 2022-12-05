import React, { useEffect } from "react";
import { useState } from "react";
import { getArticles } from "../api";
import { Link } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <div>
      <h2>ArticleList</h2>
      <ul className="article_list">
        {articles.map((article) => {
          return (
            <li className="list_item" key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h3>{article.title}</h3>
              </Link>
              <div className="article_tags">
                <p>Topic: {article.topic}</p>
                <p>Author: {article.author}</p>
                <p>Date Published: {Date(article.created_at)}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleList;
