import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import { Flex } from '@chakra-ui/layout';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from './components/Header/Header';
import Footer from './components/Footer';

function App() {
  return (
  <Router>
     <Flex
      direction="column"
      maxW={{ xl: "1200px" }}
      m="0 auto"
    >
  <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
    <Footer />
    </Flex>
    </Router>
  );
}

export default App;
