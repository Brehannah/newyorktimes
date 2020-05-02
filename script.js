// lmb2dvArA4BDsfkE api key

//These need to be initialized up here first. we'll set the values in a function later
let searchTerm = "";
let startYear = 0;
let endYear = 0;
let numRec = 0;

const getUserInput = function () {
  searchTerm = $("#searchTerm").val().trim();
  startYear = $("#startYear").val().trim();
  endYear = $("#endYear").val().trim();
  numRec = $("#records").val().trim();
  getArticles();
};

const getArticles = function () {
  let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&begin_date=${startYear}0101&end_date=${endYear}1231&api-key=wyTBSejT3YxoAMM80hGXkz3g9cA3mKPm`;

  $.get(queryURL).then(function (data) {
    console.log(data);
    let articles = data.response.docs;
    for (let i = 0; i < numRec; i++) {
      console.log(articles[i].headline.main);
      console.log(articles[i].byline.original);
      console.log(articles[i].web_url);
    }
  });
};

$("#searchButton").on("click", getUserInput);
