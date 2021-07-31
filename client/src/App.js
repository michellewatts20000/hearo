import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import { Flex } from '@chakra-ui/layout';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Profile from "./pages/Profile";
import PlaceDetails from "./pages/PlaceDetails";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
  <Router>
     <Flex
      direction="column"
      maxW={{ xl: "1200px" }}
      m="0 auto"
    >
  <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/me" component={Profile} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/places/:placeId" component={PlaceDetails} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
    <Footer />
    </Flex>
    </Router>
    </ApolloProvider>
  );
}

export default App;
