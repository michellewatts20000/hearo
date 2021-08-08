import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import {
  Heading,
  Button,
  FormLabel,
  FormControl,
  Select,
  Text,
  Box,
  Link,
  Stack,
  SimpleGrid,
  Spinner
} from "@chakra-ui/react";
import { QUERY_SEARCH } from "../utils/queries";

const SearchForm = () => {
  const [formState, setFormState] = useState({
    placeType: "",
    rating: "",
  });

  const [placeSearch, { data, loading }] = useLazyQuery(QUERY_SEARCH);

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
      
       <Stack direction={["column","column","column", "row"]} spacing="24px">
         <Box w={["100%", "100%", "30%", "40%"]} mr="10">
          <Heading mb={5}>Search for a quiet place in Sydney</Heading>
<form onSubmit={handleFormSubmit}>
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
              <option>Cafe</option>
            </Select>
          </FormControl>

          <FormControl isRequired id="rating" mt={5} mb={7}>
            <FormLabel>Loudness rating</FormLabel>
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
       {loading ? (
          <Button variant="primary">
            <Spinner color="gray.800" />
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
      </form>
      </Box>
 <Box w={["100%", "100%", "70%", "60%"]}>
       <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px">
        {data && reviews.length === 0 && (
<Text> There are no entries for this combination, please try another search.</Text>
    )}

    {console.log(reviews)}
        {reviews.map((review, index) => (
           <Box p={"15px"} borderColor={"white"} border={"1px solid"} key={index}>
            <Text variant="h4">{review.place.placeName}</Text>
             {review.place.review.length === 1 ? (  <Text variant="h4">{review.place.review.length} review</Text>) : (
 <Text variant="h4">{review.place.review.length} reviews</Text>
             )}
            <Text>{review.place.placeLocation}</Text>
          
             {review.place.review.length === 1 ? (   <Link variant={"highlight"} href={`/places/${review.place._id}`}>See {review.place.placeName} review</Link>) : (
  <Link variant={"highlight"} href={`/places/${review.place._id}`}>See {review.place.placeName} reviews</Link>
             )}
          </Box>
        ))}
      </SimpleGrid>
      </Box>
      </Stack>
    </>
  );
};

export default SearchForm;
