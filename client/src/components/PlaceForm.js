import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  Heading,
  FormLabel,
  FormControl,
  Input,
  Select,
  Button,
  Textarea,
  Text,
  Box,
} from "@chakra-ui/react";
import { ADD_PLACE } from "../utils/mutations";
// import { QUERY_PLACES, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const PlaceForm = () => {
  const [formState, setFormState] = useState({
    placeName: "",
    placeRating: "",
    placeLocation: "",
    placeType: "",
    placeComment: "",
  });

  const [addPlace, { error, data }] = useMutation(ADD_PLACE);

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
      const { data } = await addPlace({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      placeRating: "",
      placeLocation: "",
      placeType: "",
      placeComment: "",
    });
  };

  return (
    <Box>
      <form onSubmit={handleFormSubmit}>
        <Heading mb={10}>Rate a place based on how loud it was</Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            onChange={handleChange}
            placeholder="Name"
            name="placeName"
            value={formState.placeName}
          />
        </FormControl>
        <FormControl mt={5} id="suburb">
          <FormLabel>Suburb</FormLabel>
          <Input
            onChange={handleChange}
            value={formState.placeLocation}
            name="placeLocation"
            placeholder="Suburb"
          />
        </FormControl>
        <FormControl id="place" mt={5}>
          <FormLabel>Type of place</FormLabel>
          <Select
            onChange={handleChange}
            name="placeType"
            value={formState.placeType}
            placeholder="Select type of place"
          >
            <option>Restaurant</option>
            <option>Bar</option>
            <option>Pub</option>
          </Select>
        </FormControl>
        <FormControl id="rating" mt={5}>
          <FormLabel>Rating</FormLabel>
          <Select
            onChange={handleChange}
            placeholder="Rating"
            name="placeRating"
            value={formState.placeRating}
          >
            <option>Quiet</option>
            <option>Average</option>
            <option>Bit Loud</option>
            <option>Loud</option>
            <option>Very Loud</option>
            <option>Very Very Loud</option>
          </Select>
        </FormControl>
        <FormControl mt={5} id="comment">
          <FormLabel>Comment</FormLabel>
          <Textarea
            onChange={handleChange}
            placeholder="Comment"
            name="placeComment"
            value={formState.placeComment}
          />
        </FormControl>
        <Button
          variant={"solid"}
          colorScheme={"teal"}
          size={"md"}
          mt={5}
          type="submit"
        >
          Submit
        </Button>
        {error && <Text>{error.message}</Text>}
      </form>
    </Box>
  );
};

export default PlaceForm;
