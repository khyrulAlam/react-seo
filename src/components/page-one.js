import React from "react";
import AppHelmet from "../module/header-helmet";
import { Link } from "react-router-dom";

class PageOne extends React.Component {
  state = {
    headerContent: {
      title: "This is page1",
      description:
        "Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure",
      keywords: [
        "Amid",
        "AOC",
        "pressure,",
        "Pelosi",
        "suggests",
        "impeachment",
        "back",
        "on",
        "the",
        "table",
        "to",
        "address"
      ]
    }
  };
  render() {
    return (
      <React.Fragment>
        <AppHelmet helmet={this.state.headerContent} />
        <div>
          <div className="content">
            <h1>This is page1</h1>
            <p className="paragraph">
              Amid AOC pressure, Pelosi suggests impeachment back on the table
              to address 'grave new chapter of lawlessness'Amid AOC pressure,
              Pelosi suggests impeachment back on the table to address 'grave
              new chapter of lawlessness'Amid AOC pressure, Pelosi suggests
              impeachment back on the table to address 'grave new chapter of
              lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on
              the table to address 'grave new chapter of lawlessness'Amid AOC
              pressure, Pelosi suggests impeachment back on the table to address
              'grave new chapter of lawlessness'Amid AOC pressure, Pelosi
              suggests impeachment back on the table to address 'grave new
              chapter of lawlessness'Amid AOC pressure, Pelosi suggests
              impeachment back on the table to address 'grave new chapter of
              lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on
              the table to address 'grave new chapter of lawlessness'Amid AOC
              pressure, Pelosi suggests impeachment back on the table to address
              'grave new chapter of lawlessness'Amid AOC pressure, Pelosi
              suggests impeachment back on the table to address 'grave new
              chapter of lawlessness'Amid AOC pressure, Pelosi suggests
              impeachment back on the table to address 'grave new chapter of
              lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on
              the table to address 'grave new chapter of lawlessness'Amid AOC
              pressure, Pelosi suggests impeachment back on the table to address
              'grave new chapter of lawlessness'
            </p>
          </div>

          <Link to="//google.com" target="_blank" className="p15">
            Google
          </Link>
          <Link to="//yahoo.com" target="_blank" className="p15">
            Yahoo
          </Link>
          <Link to="//amazon.com" target="_blank" className="p15">
            Amazon
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default PageOne;
