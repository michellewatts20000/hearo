import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
  <Router>
  <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
    <Footer />
    </Router>
  );
}

export default App;
