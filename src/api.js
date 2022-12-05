import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://lazy-cyan-pike-slip.cyclic.app/",
});

export const getArticles = () => {
  return newsApi
    .get(`/api/articles`)
    .then((res) => {
      return res.data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
};
