import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Reservation } from './Components/Reservation';
import './style.css';

const App = () => (
  <div className="container">
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/reservation" exact>
          <Reservation />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </div>
);

render(<App />, document.querySelector('#app'));
