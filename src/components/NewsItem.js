import React from 'react';

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '92%', zIndex: 1 }}>
          {source}
        </span>
        <img
          className="card-img-top"
          src={
            imageUrl
              ? imageUrl
              : 'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/8C5A/production/_127603953_gettyimages-1244632300-1.jpg'
          }
          alt="Card imageCap"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>

          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : 'unknown'} on {new Date(date).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
