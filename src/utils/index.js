export const sortArray = (arr, prop, order) => {
  let sortedArticles = [...arr].sort((a, b) => {
    let result;
    if (a[prop] < b[prop]) {
      result = 1;
    }
    if (a[prop] > b[prop]) {
      result = -1;
    }

    return result ? result * order : 0;
  });
  return sortedArticles;
};
