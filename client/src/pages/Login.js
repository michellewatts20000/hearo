import React, { useState } from "react";
import {
  Heading,
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner
} from "@chakra-ui/react";

// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data, loading }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <Box>
      {data ? (
        <Alert color="black" status="success">
          <AlertIcon />
          <AlertTitle  mr={2}>Success!</AlertTitle>
          <AlertDescription>You have logged in!</AlertDescription>
        </Alert>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <Heading mb={5}>Login</Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="email"
              name="email"
              className="form-input"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={5} mb={7} id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="password"
              className="form-input"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
          </FormControl>
          
            {loading ? (
          <Button variant="primary">
            <Spinner color="gray.800" />
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Login
          </Button>
        )}
          
       
        </form>
      )}

      {error && <Text>{error.message}</Text>}
    </Box>
  );
};

export default Login;
