import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './styles/App.scss';
import './styles/Utils.scss';

import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import About from "./components/pages/About";

function App() {
  return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
            <Switch>
              <Route exact path="/" render={() => <Redirect to={'/home'} />} />
              <Route path='/home' exact component={Home} />
              <Route path='/work' component={Portfolio} />
              <Route path='/resume' component={Resume} />
              <Route path='/contact' component={Contact} />
              <Route path={'/about'} component={About}/>
            </Switch>
        </Router>
      </>
  );
}

export default App;
