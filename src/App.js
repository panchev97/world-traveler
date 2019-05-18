import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/header';
import Footer from './components/footer';

// Main App Class
class WorldTraveler extends Component {
  render () {
    return (
      // Load components here
      <div className='App'>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default WorldTraveler;
