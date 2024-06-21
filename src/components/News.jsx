import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem.jsx';
import Spinner from './Spinner.jsx';

const News = ({ country = 'in', pageSize = 8, category = 'general' }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=e75fc245b6864b76a4ab9ba37cf9611c&page=${page}&pageSize=${pageSize}`;
      setLoading(true);
      try {
        let response = await fetch(url);
        let parsedData = await response.json();
        console.log(parsedData);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchNews();
  }, [country, category, pageSize, page]);

  const handlePrevClick = () => {
    console.log("Previous Clicked");
    setPage(page - 1);
  };

  const handleNextClick = () => {
    console.log("Next Clicked");
    if (!(page + 1 > Math.ceil(totalResults / pageSize))) {
      setPage(page + 1);
    }
  };

  return (
    <div className="container my-3">
      <h1 className="text-center my-5">NewsMonkey - Top Headlines</h1>
      <div className="text-center">
        {loading && <Spinner className="text-center" />}
      </div>
      <div className="row">
        {!loading &&
          articles.map((element) => (
            <div className="col md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
      </div>

      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / pageSize)}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};



export default News;
