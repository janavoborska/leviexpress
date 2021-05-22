import React from 'react';
import { render } from 'react-dom';
import { Footer } from './Components/Footer';

import { Header } from './Components/Header';
import './style.css';

const App = () => (
  <div className="container">
    <Header />
    <Footer />
  </div>
);

render(<App />, document.querySelector('#app'));
