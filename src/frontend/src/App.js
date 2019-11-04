import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import PriceMap from "./Component/PriceMap/index";

class App extends Component {
    render() {
        return (
            <Router>
              <Route path="/" exact component={PriceMap} />
            </Router>
        );
    }
}

export default App;