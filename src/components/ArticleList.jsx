import React, { useEffect } from "react";
import { useState } from "react";
import { getArticles } from "../api";
import { Link, useParams, useLocation } from "react-router-dom";
import ArticleFilter from "./ArticleFilter";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("default");
  const [order, setOrder] = useState(1);
  // const [articleSearch, setArticleSearch] = useState("");
  let location = useLocation();
  const articleSearch = Object.fromEntries(
    new URLSearchParams(location.search)
  );

  useEffect(() => {
    setLoading(true);
    let para = {};
    if (order === "1") {
      para.order = "asc";
    } else if (order === "-1") {
      para.order = "desc";
    }
    if (sortBy != "default") {
      para.sort_by = sortBy;
    }

    getArticles(location.search, para).then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, [location, sortBy, order]);

  return (
    <div id="articlesWrapper">
      <ArticleFilter
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
      ></ArticleFilter>
      <h2>ArticleList</h2>
      {articleSearch.topic ? <h2>Topic: {articleSearch.topic} </h2> : null}
      <ul className="article_list">
        {loading ? (
          <div>Loading articles..</div>
        ) : (
          articles.map((article) => {
            return (
              <li className="list_item" key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <h3>{article.title}</h3>
                </Link>
                <div className="article_tags">
                  <p>Topic: {article.topic}</p>
                  <p>Author: {article.author}</p>
                  <p>Votes: {article.votes}</p>
                  <p>Comments: {article.comment_count}</p>
                  <p>
                    Date Published: {new Date(article.created_at).toUTCString()}
                  </p>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default ArticleList;
