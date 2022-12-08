import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://lazy-cyan-pike-slip.cyclic.app/",
});

export const getArticles = (search) => {
  return newsApi.get(`/api/articles` + search).then((res) => {
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

export const patchArticleVotes = (article_id, votes) => {
  const patchBody = { inc_votes: votes };
  return newsApi.patch(`/api/articles/${article_id}`, patchBody).then((res) => {
    return res.data.article;
  });
};

export const getTopics = () => {
  return newsApi.get("/api/topics").then((res) => {
    return res.data.topics;
  });
};
