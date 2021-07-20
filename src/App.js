import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
