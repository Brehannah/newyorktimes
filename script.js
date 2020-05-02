// lmb2dvArA4BDsfkE api key

let searchTerm = "test";
let startYear = 2001;
let endYear = 2002;

let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&begin_date=${startYear}0101&end_date=${endYear}1231&api-key=wyTBSejT3YxoAMM80hGXkz3g9cA3mKPm`;

$.get(queryURL).then(function (data) {
  console.log(data);
  let articles = data.response.docs;
  for (let i = 0; i < articles.length; i++) {
    console.log(articles[i].headline.main);
    console.log(articles[i].byline.original);
    console.log(articles[i].web_url);
  }
});
