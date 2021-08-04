import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import {
  Heading,
  Flex,
  Button,
  FormLabel,
  FormControl,
  Select,
} from "@chakra-ui/react";

const SearchForm = () => {
  const [formState, setFormState] = useState({
    placeType: "",
  });

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
      await {
        variables: { ...formState },
      };
      // console.log(data);
    } catch (e) {
      console.error(e);
    }
    console.log("2nd form", formState);
  };

  // useEffect(() => {
  //   console.log("data", data);
  // }, [data]);

  return (
    <form onSubmit={handleFormSubmit}>
      <Flex align="center" justify="space-between" wrap="wrap" w="100%">
        <Heading mb={5}>Search for a quiet place in Sydney</Heading>
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

        {/* <FormControl isRequired id="rating" mt={5}>
          <FormLabel>Rating</FormLabel>
          <Select placeholder="How loud?">
            <option>Quiet</option>
            <option>Average</option>
            <option>Bit Loud</option>
            <option>Loud</option>
            <option>Very Loud</option>
            <option>Very Very Loud</option>
          </Select>
        </FormControl> */}
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
  );
};

export default SearchForm;
