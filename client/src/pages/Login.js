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
  Spinner,
  Stack
} from "@chakra-ui/react";

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
    })
  };

  return (
    <>
      <Stack spacing={8} mx={"auto"} p={{ base: "0", md: "10" }} maxW={"lg"}>
        <Box boxShadow={{ base: "sm", md: "lg" }} p={8} bg={"gray.200"}>
          {data ? (
            <Alert status="success">
              <AlertIcon />
              <AlertTitle mr={2}>Success!</AlertTitle>
              <AlertDescription>You have logged in!</AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <Heading mb={5}>Sign in to your account</Heading>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  variant="regular"
                />
              </FormControl>
              <FormControl mt={5} mb={7} id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                  variant="regular"
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
      </Stack>
    </>
  );
};

export default Login;
