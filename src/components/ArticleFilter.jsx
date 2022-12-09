import React from "react";

const ArticleFilter = ({ sortBy, setSortBy, order, setOrder }) => {
  const filterLabels = {
    created_at: ["Oldest First", "Newest First"],
    votes: ["Lowest to Highest", "Highest to Lowest"],
    comment_count: ["Lowest to Highest", "Highest to Lowest"],
    default: ["Lowest to Highest", "Highest to Lowest"],
  };

  const handleReset = () => {
    setSortBy("default");
    setOrder(1);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };
  const handleSortOrderChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <div>
      <p>ArticleFilter</p>
      <form>
        <select
          onChange={(event) => {
            handleSortByChange(event);
          }}
        >
          <option label={"-- Sort By --"} value="none" selected hidden></option>
          <option label={"Date"} value={"created_at"}></option>
          <option label={"Votes"} value={"votes"}></option>
          <option label={"Comments"} value={"comment_count"}></option>
        </select>

        <select
          onChange={(event) => {
            handleSortOrderChange(event);
          }}
          disabled={sortBy === "default"}
        >
          <option label={"-- Order --"} value="none" selected hidden></option>
          <option label={filterLabels[sortBy][0] || ""} value={1}></option>
          <option label={filterLabels[sortBy][1] || ""} value={-1}></option>
        </select>

        <input
          type="reset"
          onClick={() => {
            handleReset();
          }}
        ></input>
      </form>
    </div>
  );
};

export default ArticleFilter;
