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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box>
      {data ? (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle mr={2}>Success!</AlertTitle>
          <AlertDescription>You have created an account!</AlertDescription>
        </Alert>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <Heading mb={10}>Create an account</Heading>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="name"
              className="form-input"
              name="username"
              type="text"
              onChange={handleChange}
              value={formState.name}
            />
          </FormControl>
          <FormControl mt={5} id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="email"
              className="form-input"
              name="email"
              type="email"
              onChange={handleChange}
              value={formState.email}
            />
          </FormControl>
          <FormControl mt={5} id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="*****"
              className="form-input"
              name="password"
              type="password"
              onChange={handleChange}
              value={formState.password}
            />
          </FormControl>
          <Button
            variant={"solid"}
            colorScheme={"teal"}
            size={"md"}
            mt={5}
            type="submit"
          >
            Signup
          </Button>
        </form>
      )}
      {error && <Text>{error.message}</Text>}
    </Box>
  );
};

export default Signup;
