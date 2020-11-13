import Nav from './component/Nav'
import Home from './component/Home'
import Student from './component/Student'
import About from './component/About'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
          <Nav/>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/student">
            <Student />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
