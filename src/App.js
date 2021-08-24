import React from "react";
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Router>
            <Navigation/>
          <Switch>
            <Route path='/' exact component={Home}></Route>
              <Route path='/about' component={About}></Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
