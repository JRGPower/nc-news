import React from "react";

const ArticleFilter = () => {
  return (
    <div>
      <p>ArticleFilter</p>
      <form onSubmit={() => {}}>
        <select defaultValue={"form"} id="category_name">
          <option disabled selected value>
            -- select a category --
          </option>
          <option label={"Date"} value={"date"}></option>
          <option label={"Votes"} value={"votes"}></option>
          <option label={"Number of Comments"} value={"comment_count"}></option>
        </select>
      </form>
    </div>
  );
};

export default ArticleFilter;
