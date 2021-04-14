import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Records from './components/Records/Records';

function App() {
  return (
      <div className="w-full min-h-screen px-4 mx-auto text-white bg-gray-800">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/records" component={Records}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
