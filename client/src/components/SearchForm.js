import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import {
  Heading,
  Flex,
  Button,
  FormLabel,
  FormControl,
  Select,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";
import { QUERY_SEARCH } from "../utils/queries";

const SearchForm = () => {
  const [formState, setFormState] = useState({
    placeType: "",
    rating: "",
  });

  const [placeSearch, { error, data }] = useLazyQuery(QUERY_SEARCH);

  const reviews = data?.placeSearch || [];
  console.log("data", data);

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
      await placeSearch({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
    console.log("46", formState);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Flex align="center" justify="space-between" wrap="wrap" w="100%">
          <Heading mb={5}>Search for a quiet place in Sydney</Heading>

          <FormControl isRequired id="place" mt={5}>
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
              <option>Other</option>;
            </Select>
          </FormControl>

          <FormControl isRequired id="rating" mt={5}>
            <FormLabel>Rating</FormLabel>
            <Select
              onChange={handleChange}
              name="rating"
              value={formState.rating}
              placeholder="Loudness rating"
            >
              <option>Quiet</option>
              <option>Average</option>
              <option>Bit Loud</option>
              <option>Loud</option>
              <option>Very Loud</option>
              <option>Very Very Loud</option>
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant={"solid"}
            colorScheme={"teal"}
            size={"md"}
            mt={5}
          >
            Submit
          </Button>
        </Flex>
      </form>

      <Box>
        {reviews.map((review, index) => (
          <Box mt={10} key={index}>
            <Text>Place: {review.place.placeName}</Text>
            <Text>Location: {review.place.placeLocation}</Text>
            <Text>Type: {review.place.placeType}</Text>
            <Link href={`/places/${review.place._id}`}>See Reviews</Link>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SearchForm;
