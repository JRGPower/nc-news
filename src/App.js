import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <main className="app">
      <Header />
      <Nav />
      <ArticleList />
    </main>
  );
}

export default App;
