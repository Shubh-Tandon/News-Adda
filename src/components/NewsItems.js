import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
   let {title, description, imageUrl, newsUrl, author, date, source}= this.props;
    return (
      <div className="my-3">
        <div className="card myContainerCard">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-info" style={{left: '90%', zIndex: '1'}}>
        {source}
        </span>
  
          <img src={imageUrl?imageUrl:"https://english.cdn.zeenews.com/sites/default/files/2022/12/18/1130792-kesar-15.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <div className="card-text">
              {description}...
              <p className="text-muted my-2">
                  Published By {author?author:"Unknown"} at {new Date(date).toGMTString()
}
                </p>

            </div>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
