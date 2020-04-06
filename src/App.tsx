import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Common Component
import SideMenu from './components/SideMenu';

// Pages
import Index from './pages';
import Layout from './pages/layout';

function App() {
  return (
      <Router>
          <SideMenu />
          <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/layout" component={Layout} />
          </Switch>
      </Router>
  );
}

export default App;
