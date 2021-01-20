import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Media from 'react-media';

import Home from './pages/home';
import Layout from './components/layout';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Media
          queries={{
            small: '(max-width: 599px)',
            medium: '(min-width: 600px) and (max-width: 1199px)',
            large: '(min-width: 1200px)'
          }}
        >
          <Layout>             
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Layout>
        </Media>
      </div>
    </Router>
  );
}

export default App;
