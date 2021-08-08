import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SearchPage from "./pages/SearchPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DbLevel from "./components/DbLevel";
import Profile from "./pages/Profile";
import SinglePlace from "./pages/SinglePlace";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App({ cookies }) {
  return (
    <ApolloProvider client={client}>
      <Flex direction="column" maxW={{ xl: "1400px" }} px={{ base: "10", sm: "20", md: "20" }} m="0 auto">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/home" component={Home} /> */}
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/me" component={Profile} />
            <Route exact path="/about" component={About} />
            <Route exact path="/places/:placeId" component={SinglePlace} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/404" component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </Flex>
    </ApolloProvider>
  );
}

export default App;
