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
} from "@chakra-ui/react";
import { ADD_PLACE } from "../utils/mutations";
import { QUERY_PLACES, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const PlaceForm = () => {
  const [placeName, setPlaceName] = useState("");

  const [addPlace, { error }] = useMutation(ADD_PLACE, {
    update(cache, { data: { addPlace } }) {
      try {
        const { places } = cache.readQuery({ query: QUERY_PLACES });

        cache.writeQuery({
          query: QUERY_PLACES,
          data: { places: [addPlace, ...places] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, places: [...me.places, addPlace] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPlace({
        variables: {
          placeName,
          placeAuthor: Auth.getProfile().data.username,
        },
      });
      console.log("data", data);
      setPlaceName("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    console.log("value", value);
    setPlaceName(value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Heading mb={10}>Rate a place based on how loud it was</Heading>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          onChange={handleChange}
          placeholder="Name"
          name="placeName"
          value={placeName}
        />
      </FormControl>
      <FormControl mt={5} id="suburb">
        <FormLabel>Suburb</FormLabel>
        <Input placeholder="Suburb" />
      </FormControl>
      <FormControl id="place" mt={5}>
        <FormLabel>Type of place</FormLabel>
        <Select placeholder="Select type of place">
          <option>Restaurant</option>
          <option>Bar</option>
          <option>Pub</option>
        </Select>
      </FormControl>
      <FormControl id="rating" mt={5}>
        <FormLabel>Rating</FormLabel>
        <Select placeholder="How loud is it?">
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
        <Textarea placeholder="Comment" />
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
  );
};

export default PlaceForm;
