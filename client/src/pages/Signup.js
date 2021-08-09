import React, { useState } from "react";
import {
  Heading,
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data, loading }] = useMutation(ADD_USER);

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
        <Alert color="black" status="success">
          <AlertIcon />
          <AlertTitle mr={2}>Success!</AlertTitle>
          <AlertDescription>You have created an account!</AlertDescription>
        </Alert>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <Heading mb={5}>Create an account</Heading>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Name"
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
              placeholder="Email"
              className="form-input"
              name="email"
              type="email"
              onChange={handleChange}
              value={formState.email}
            />
          </FormControl>
          <FormControl mt={5} mb={7} id="password" isRequired>
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
            {loading ? (
          <Button variant="primary">
            <Spinner color="gray.800" />
          </Button>
        ) : (
          <Button variant="primary" type="submit">
           Signup
          </Button>
        )}
          
        </form>
      )}
      {error && (
        <Alert status="error">
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}
    </Box>
  );
};

export default Signup;
