import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import { Routes, Route } from "react-router-dom";
import Article from "./components/Article";
import Home from "./components/Home";

function App() {
  return (
    <main className="app">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles?topic=topic_id" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </main>
  );
}

export default App;
