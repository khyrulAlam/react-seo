import React from "react";
import AppHelmet from "../module/header-helmet";
import { Link } from "react-router-dom";

class PageTwo extends React.Component {
  state = {
    headerContent: {
      title: "This is page2",
      description:
        "This is page2This is page2This is page2This is page2This is page2This is page2This is page2 This is page2This is page2This is page2This is page2This is page2This is page2This is page2",
      keywords: [
        "This",
        "is",
        "page2This",
        "is",
        "page2This",
        "is",
        "page2This",
        "is",
        "page2This",
        "is",
        "page2This",
        "is",
        "page2This",
        "is",
        "page2"
      ]
    }
  };
  render() {
    return (
      <React.Fragment>
        <AppHelmet helmet={this.state.headerContent} />
        <div>
          <div className="content">
            <h1>This is page2</h1>
            <p className="paragraph">
              This is page2This is page2This is page2This is page2This is
              page2This is page2This is page2This is page2This is page2This is
              page2This is page2This is page2This is page2This is page2This is
              page2This is page2This is page2This is page2This is page2This is
              page2This is page2This is page2This is page2This is page2This is
              page2This is page2This is page2This is page2This is page2This is
              page2This is page2This is page2This is page2This is page2This is
              page2This is page2This is page2This is page2This is page2This is
              page2This is page2This is page2This is page2This is page2This is
              page2This is page2This is page2This is page2This is page2This is
              page2This is page2This is page2This is page2This is page2This is
              page2This is page2This is page2This is page2This is page2This is
              page2This is page2This is page2This is page2This is page2This is
              page2This is page2This is page2This is page2This is page2This is
              page2This is page2This is page2This is page2This is page2This is
              page2This is page2This is page2This is page2This is page2This is
              page2This is page2This is page2This is page2
            </p>
          </div>

          <Link to="//facebook.com" target="_blank" className="p15">
            Facebook
          </Link>
          <Link to="//instagram.com" target="_blank" className="p15">
            Instagram
          </Link>
          <Link to="//twitter.com" target="_blank" className="p15">
            Twitter
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default PageTwo;
