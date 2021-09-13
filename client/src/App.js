import React, { Component } from 'react';
import HomeCart from './components/HomeCart';
import { BrowserRouter as Router, Route } from "react-router-dom"
import MyCart from './components/MyCart';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={HomeCart} />
          <Route path="/mycart" exact component={MyCart} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;