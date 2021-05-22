import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className="site-title">
          <a href="/">LeviExpress</a>
        </h1>
        <h2>ahoj</h2>
      </div>
    </header>
  );
};
