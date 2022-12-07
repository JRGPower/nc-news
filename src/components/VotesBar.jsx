import React from "react";
import { useState } from "react";
import { patchArticleVotes } from "../api";

const VotesBar = ({ article }) => {
  const [votingDisabled, setVotingDisabled] = useState(false);
  const [votedUp, setVotedUp] = useState(false);
  const [votedDown, setVotedDown] = useState(false);

  let votes = article.votes;
  if (votedUp) {
    votes += 1;
  } else if (votedDown) {
    votes -= 1;
  }

  const handleVote = (newVote) => {
    setVotingDisabled(true);

    if (newVote > 0) {
      if (votedUp) {
        newVote *= -1;
      }
      setVotedUp((currVotedUp) => {
        return !currVotedUp;
      });
      setVotedDown(false);
    } else {
      if (votedDown) {
        newVote *= -1;
      }
      setVotedDown((currVotedDown) => {
        return !currVotedDown;
      });
      setVotedUp(false);
    }

    patchArticleVotes(article.article_id, newVote).then((patchedArticle) => {
      if (patchedArticle.votes === article.votes) {
        setVotedUp(false);
        setVotedUp(false);
      }
    });

    setTimeout(() => setVotingDisabled(false), 400);
  };

  return (
    <div id="votes-bar">
      <h3>Article Votes</h3>
      <p>VotesBar Placeholder</p>
      <p>Votes: {votes} </p>
      <button
        onClick={() => {
          handleVote(1);
        }}
        disabled={votingDisabled}
        style={{ backgroundColor: votedUp ? "green" : "white" }}
      >
        vote up
      </button>
      <button
        onClick={() => {
          handleVote(-1);
        }}
        disabled={votingDisabled}
        style={{ backgroundColor: votedDown ? "red" : "white" }}
      >
        vote down
      </button>
    </div>
  );
};

export default VotesBar;
