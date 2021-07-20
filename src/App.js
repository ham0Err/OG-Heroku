import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Profile from './Profile'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
