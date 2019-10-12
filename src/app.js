import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import PageOne from "./components/page-one";
import PageTwo from "./components/page-two";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <ul>
              <li>
                <Link to="/page-one">Page One</Link>
              </li>
              <li>
                <Link to="/page-two">Page Two</Link>
              </li>
            </ul>
          </header>
          <Switch>
            <Route exact path="/" component={PageOne} />
            <Route path="/page-one" component={PageOne} />
            <Route path="/page-two" component={PageTwo} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
