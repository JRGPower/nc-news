import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTopics } from "../api";

const Nav = () => {
  const [topics, setTopics] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
      console.log(topics);
    });
  }, []);

  return location.pathname === "/" ? null : (
    <nav>
      {/* <div>Nav Placeholder</div> */}
      <Link to="/articles">All Articles</Link>
      {topics.map((topic) => {
        return (
          <Link to={`/articles?topic=${topic.slug}`} key={topic.slug}>
            {topic.slug}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
