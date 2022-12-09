import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import { Routes, Route } from "react-router-dom";
import Article from "./components/Article";
import Home from "./components/Home";
import { UserContext } from "./contexts/Contexts";
import { useState } from "react";
import InvalidUrl from "./components/InvalidUrl";

function App() {
  const [user, setUser] = useState("");

  return (
    <main className="app">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />

        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles?topic=topic_id" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="*" element={<InvalidUrl />} />
        </Routes>
      </UserContext.Provider>
    </main>
  );
}

export default App;
