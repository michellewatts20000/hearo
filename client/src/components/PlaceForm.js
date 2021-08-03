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
// import SearchLocationInput from "../utils/SearchLocationInput";
// import SearchLocationInput2 from "../utils/SearchLocationInput2";
// import Auth from "../utils/auth";

const PlaceForm = () => {
  const [formState, setFormState] = useState({
    placeName: "",
    placeLocation: "",
    placeType: "",
    rating: "",
    comment: "",
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
      await addPlace({
        variables: { ...formState },
      });
      // console.log(data);
    } catch (e) {
      console.error(e);
    }
    console.log("2nd form", formState);

    // clear form values
    setFormState({
      placeName: "",
      placeLocation: "",
      placeType: "",
      rating: "",
      comment: "",
    });
  };

  return (
    <Box>
      <form onSubmit={handleFormSubmit}>
        <Heading as="h3" color="#7FE6D1" size="md" mb={5}>
          Rate a place based on how loud it was
        </Heading>
        {/* <SearchLocationInput onChange={() => null} />
         */}
        <FormControl id="name" mt={5}>
          <FormLabel>Name of place</FormLabel>
          <Input
            onChange={handleChange}
            placeholder="Name"
            name="placeName"
            value={formState.placeName}
          />
        </FormControl>

        <FormControl id="suburb" mt={5}>
          <FormLabel>Suburb</FormLabel>
          <Input
            onChange={handleChange}
            placeholder="Suburb"
            name="placeLocation"
            value={formState.placeLocation}
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
            name="rating"
            value={formState.rating}
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
            name="comment"
            value={formState.comment}
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
