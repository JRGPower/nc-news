import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { patchArticleVotes } from "../api";

const VotesBar = ({ article }) => {
  const [votes, setVotes] = useState();

  const handleClick = (newVote) => {
    setVotes(votes + newVote);
    patchArticleVotes(article.article_id, newVote).then(() => {});
  };

  useEffect(() => {
    setVotes(article.votes);
  }, [article]);

  return (
    <div id="votes-bar">
      <h3>Article Votes</h3>
      <p>VotesBar Placeholder</p>
      <p>Votes: {votes} </p>
      <button
        onClick={() => {
          handleClick(1);
        }}
      >
        add vote
      </button>
      <button
        onClick={() => {
          handleClick(-1);
        }}
      >
        remove vote
      </button>
    </div>
  );
};

export default VotesBar;
