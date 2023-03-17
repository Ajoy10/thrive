import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/football">Football</Link>
            </li>
            <li>
              <Link to="/interview-prep">Interview Prep</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/search">
            <SearchBar />
          </Route>
          <Route path="/football">
            <Football />
          </Route>
          <Route path="/interview-prep">
            <InterviewPrep />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
