import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://lazy-cyan-pike-slip.cyclic.app/",
});

export const getArticles = () => {
  return newsApi.get(`/api/articles`).then((res) => {
    return res.data.articles;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/api/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getArticleComments = (article_id) => {
  return newsApi.get(`/api/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};
